import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getTemplate, getOccasion } from "@/lib/templates";
import CardFlip from "@/components/CardFlip";
import DownloadButton from "@/components/DownloadButton";
import type { Metadata } from "next";

interface Props {
  params: { cardId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "You've received a card ♡ — a cute website",
    description: "Someone sent you a little love. Open your card to see your message.",
  };
}

export default async function CardPage({ params }: Props) {
  const { cardId } = params;

  // Fetch card from Supabase
  const { data: card, error } = await supabase
    .from("cards")
    .select("*")
    .eq("id", cardId)
    .single();

  if (error || !card) {
    notFound();
  }

  // Check if expired
  const isExpired = new Date(card.expires_at) < new Date();
  if (isExpired) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-sm mx-auto animate-fade-up">
          <div className="text-5xl mb-6">🍂</div>
          <h2 className="font-display text-3xl text-[#3d2a2a] mb-3">
            This card has floated away
          </h2>
          <p className="text-sm text-[#9a7070] leading-relaxed mb-8">
            Cards are only available for 30 days after they're sent. This one
            has expired — but the love behind it hasn't ♡
          </p>
          <a href="/" className="btn-primary">
            Send a new card
          </a>
        </div>
      </main>
    );
  }

  const occasion = getOccasion(card.occasion);
  const template = getTemplate(card.occasion, card.template_id);

  if (!occasion || !template) {
    notFound();
  }

  // Calculate days remaining
  const daysRemaining = Math.ceil(
    (new Date(card.expires_at).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const expiryDate = new Date(card.expires_at).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-6 py-5 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-rose-DEFAULT">
          a cute website
        </p>
      </header>

      <div className="max-w-lg mx-auto px-6 pb-20">

        {/* Intro */}
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="font-display text-4xl text-[#3d2a2a] mb-3">
            You've got a card! 🌙
          </h1>
          <p className="text-sm text-[#9a7070] leading-relaxed">
            Someone sent you a little love for {occasion.label}.
            <br />
            Tap the card to reveal your message ♡
          </p>
        </div>

        {/* Card flip */}
        <div className="animate-fade-up delay-100 mb-8">
          <CardFlip
            frontImage={template.image}
            templateName={template.name}
            fields={card.fields}
            interactive={true}
          />
        </div>

        {/* Download button */}
        <div className="animate-fade-up delay-200 mb-6">
          <DownloadButton
            frontImage={template.image}
            templateName={template.name}
            fields={card.fields}
            occasionLabel={occasion.label}
          />
        </div>

        {/* Expiry notice */}
        <div className="animate-fade-up delay-300 bg-white border border-petal-100 rounded-3xl px-6 py-5 text-center shadow-soft">
          <p className="text-sm text-[#9a7070] leading-relaxed">
            🌸 This card will float away in{" "}
            <span className="text-rose-DEFAULT font-medium">
              {daysRemaining} {daysRemaining === 1 ? "day" : "days"}
            </span>{" "}
            on {expiryDate}.
            <br />
            Download it above to keep it forever ♡
          </p>
        </div>

      </div>
    </main>
  );
}