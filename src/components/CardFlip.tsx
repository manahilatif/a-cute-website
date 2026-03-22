"use client";

import { useState } from "react";
import Image from "next/image";

interface CardFlipProps {
  frontImage: string;
  templateName: string;
  fields: Record<string, string>;
  interactive?: boolean;
}

export default function CardFlip({
  frontImage,
  templateName,
  fields,
  interactive = true,
}: CardFlipProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Card */}
      <div
        className="card-scene w-full max-w-sm"
        style={{ height: "440px" }}
      >
        <div
          className={`card-inner w-full h-full ${flipped ? "flipped" : ""}`}
          onClick={() => interactive && setFlipped((f) => !f)}
          style={{ cursor: interactive ? "pointer" : "default" }}
        >
          {/* Front — art */}
          <div className="card-face">
            <div className="relative w-full h-full">
              <Image
                src={frontImage}
                alt={templateName}
                fill
                className="object-cover"
                sizes="384px"
                priority
              />
              {/* Subtle shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Flip hint */}
            {interactive && !flipped && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-rose-DEFAULT text-xs font-medium px-4 py-1.5 rounded-full shadow-soft animate-float">
                tap to open ♡
              </div>
            )}
          </div>

          {/* Back — message */}
          <div className="card-face card-back bg-cream flex flex-col">
            {/* Decorative top */}
            <div className="h-2 w-full bg-gradient-to-r from-petal-200 via-blush-200 to-butter-200" />

            <div className="flex-1 flex flex-col justify-between p-8">
              {/* To */}
              {fields.to && (
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-rose-DEFAULT mb-1">
                    to
                  </p>
                  <p className="font-display text-2xl text-[#3d2a2a]">
                    {fields.to}
                  </p>
                </div>
              )}

              {/* Message */}
              {fields.message && (
                <div className="flex-1 flex items-center py-6">
                  <p className="font-display italic text-lg leading-relaxed text-[#6b4545] whitespace-pre-wrap">
                    {fields.message}
                  </p>
                </div>
              )}

              {/* From */}
              {fields.from && (
                <div className="text-right">
                  <p className="text-xs font-medium tracking-widest uppercase text-rose-DEFAULT mb-1">
                    from
                  </p>
                  <p className="font-display text-xl text-[#3d2a2a]">
                    {fields.from}
                  </p>
                </div>
              )}

              {/* Any extra fields */}
              {Object.entries(fields)
                .filter(([key]) => !["to", "message", "from"].includes(key))
                .map(([key, value]) => (
                  <div key={key} className="mt-4">
                    <p className="text-xs font-medium tracking-widest uppercase text-rose-DEFAULT mb-1">
                      {key}
                    </p>
                    <p className="font-display text-base text-[#3d2a2a]">
                      {value}
                    </p>
                  </div>
                ))}
            </div>

            {/* Decorative bottom */}
            <div className="h-2 w-full bg-gradient-to-r from-butter-200 via-blush-200 to-petal-200" />
          </div>
        </div>
      </div>

      {/* Flip toggle hint below card */}
      {interactive && (
        <button
          onClick={() => setFlipped((f) => !f)}
          className="text-xs text-[#9a7070] hover:text-rose-DEFAULT transition-colors duration-200 underline underline-offset-2"
        >
          {flipped ? "← see the front" : "see the message →"}
        </button>
      )}
    </div>
  );
}