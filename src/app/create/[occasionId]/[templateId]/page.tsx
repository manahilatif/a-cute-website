"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getOccasion, getTemplate } from "@/lib/templates";
import CardFlip from "@/components/CardFlip";
import TextEditor from "@/components/TextEditor";

export default function CreatePage() {
  const params = useParams();
  const router = useRouter();

  const occasionId = params.occasionId as string;
  const templateId = params.templateId as string;

  const occasion = getOccasion(occasionId);
  const template = getTemplate(occasionId, templateId);

  const [fields, setFields] = useState<Record<string, string>>({});
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  if (!occasion || !template) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-display text-2xl text-[#3d2a2a] mb-4">
            Oops, we couldn't find that card 🌸
          </p>
          <Link href="/" className="btn-primary">
            Go back home
          </Link>
        </div>
      </main>
    );
  }

  function handleFieldChange(id: string, value: string) {
    setFields((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSend() {
    setError("");

    // Basic validation
    if (!recipientEmail || !senderEmail) {
      setError("Please fill in both email addresses.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipientEmail)) {
      setError("Please enter a valid recipient email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      setError("Please enter a valid sender email.");
      return;
    }

    const emptyRequired = template?.fields.find(
      (f) => !fields[f.id] || fields[f.id].trim() === ""
    );
    if (emptyRequired) {
      setError(`Please fill in the "${emptyRequired.label}" field.`);
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/send-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          occasionId,
          templateId,
          fields,
          recipientEmail,
          senderEmail,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  // Success state
  if (sent) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-sm mx-auto animate-fade-up">
          <div className="text-5xl mb-6">🌙</div>
          <h2 className="font-display text-3xl text-[#3d2a2a] mb-3">
            Your card is on its way!
          </h2>
          <p className="text-sm text-[#9a7070] leading-relaxed mb-8">
            We've sent a confirmation to{" "}
            <span className="text-rose-DEFAULT">{senderEmail}</span>. Your
            recipient will find something lovely in their inbox shortly ♡
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              Send another card
            </Link>
            <Link href="/" className="btn-secondary">
              Back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-xs font-medium tracking-widest uppercase text-[#9a7070] hover:text-rose-DEFAULT transition-colors"
        >
          ← back
        </Link>
        <p className="text-xs font-medium tracking-widest uppercase text-rose-DEFAULT">
          {occasion.label}
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — live card preview */}
          <div className="lg:sticky lg:top-8">
            <p className="text-xs font-medium tracking-widest uppercase text-[#9a7070] mb-4 text-center">
              preview
            </p>
            <CardFlip
              frontImage={template.image}
              templateName={template.name}
              fields={fields}
              interactive={true}
            />
          </div>

          {/* Right — editor */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-display text-3xl text-[#3d2a2a] mb-1">
                {template.name}
              </h1>
              <p className="text-sm text-[#9a7070]">
                Customize your card, then send it ♡
              </p>
            </div>

            {/* Text fields */}
            <TextEditor
              fields={template.fields}
              values={fields}
              onChange={handleFieldChange}
            />

            {/* Divider */}
            <div className="h-px bg-petal-100" />

            {/* Email fields */}
            <div className="flex flex-col gap-5">
              <p className="text-xs font-medium tracking-widest uppercase text-rose-DEFAULT">
                delivery
              </p>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#9a7070]">
                  Recipient's email
                </label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="their@email.com"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#9a7070]">
                  Your email (for confirmation)
                </label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="you@email.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-rose-DEFAULT bg-blush-50 border border-blush-100 rounded-2xl px-4 py-3">
                {error}
              </p>
            )}

            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={sending}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-soft"
            >
              {sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-rose-DEFAULT/30 border-t-rose-DEFAULT rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send this card ♡"
              )}
            </button>

            <p className="text-xs text-center text-[#c4a0a0]">
              Your card will be available for 30 days after sending.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}