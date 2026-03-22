import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";
import { getOccasion, getTemplate } from "@/lib/templates";
import { ReceiverEmail } from "@/emails/ReceiverEmail";
import { SenderConfirmation } from "@/emails/SenderConfirmation";

export async function POST(req: NextRequest) {
  try {
    const { occasionId, templateId, fields, recipientEmail, senderEmail } =
      await req.json();

    // Validate occasion + template exist
    const occasion = getOccasion(occasionId);
    const template = getTemplate(occasionId, templateId);

    if (!occasion || !template) {
      return NextResponse.json(
        { error: "Invalid occasion or template." },
        { status: 400 }
      );
    }

    // Validate emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipientEmail) || !emailRegex.test(senderEmail)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Validate all fields are filled
    for (const field of template.fields) {
      if (!fields[field.id] || fields[field.id].trim() === "") {
        return NextResponse.json(
          { error: `Missing field: ${field.label}` },
          { status: 400 }
        );
      }
    }

    // Generate unique card ID
    const cardId = nanoid(12);

    // Calculate expiry
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);
    const expiryFormatted = expiresAt.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Save card to Supabase
    const { error: dbError } = await supabase.from("cards").insert({
      id: cardId,
      occasion: occasionId,
      template_id: templateId,
      fields,
      sender_email: senderEmail,
      expires_at: expiresAt.toISOString(),
    });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to save card. Please try again." },
        { status: 500 }
      );
    }

    const cardUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/card/${cardId}`;

    // Send receiver email
    const { error: receiverError } = await resend.emails.send({
      from: "A Cute Website <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `You've received an ${occasion.label} card 🌙`,
      react: ReceiverEmail({
        cardUrl,
        occasionLabel: occasion.label,
        templateImage: template.image,
        fields,
        expiryDate: expiryFormatted,
        senderEmail,
      }),
    });

    if (receiverError) {
      console.error("Resend receiver error:", receiverError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    // Send sender confirmation email
    const { error: senderError } = await resend.emails.send({
      from: "A Cute Website <onboarding@resend.dev>",
      to: senderEmail,
      subject: `Your ${occasion.label} card has been sent ♡`,
      react: SenderConfirmation({
        cardUrl,
        occasionLabel: occasion.label,
        recipientEmail,
        expiryDate: expiryFormatted,
      }),
    });

    if (senderError) {
      console.error("Resend sender error:", senderError);
      // Don't fail the whole request if confirmation fails
    }

    return NextResponse.json({ success: true, cardId });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}