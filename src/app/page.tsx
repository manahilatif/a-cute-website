import Link from "next/link";
import Image from "next/image";
import { occasions } from "@/lib/templates";

export default function Home() {
  const activeOccasions = occasions.filter((o) => o.active);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 text-center">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-petal-100 opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-butter-100 opacity-60 blur-3xl" />

        <div className="relative z-10 max-w-xl mx-auto">
          <p className="animate-fade-up text-sm font-medium tracking-widest uppercase text-rose-DEFAULT mb-4">
            a cute website
          </p>
          <h1 className="animate-fade-up delay-100 font-display text-5xl md:text-6xl leading-tight text-[#3d2a2a] mb-6">
            Send a little
            <span className="italic text-rose-DEFAULT"> love</span>
          </h1>
          <p className="animate-fade-up delay-200 text-base text-[#9a7070] leading-relaxed max-w-sm mx-auto">
            Pick a card, write something from the heart, and send it — straight to their inbox.
          </p>
        </div>
      </section>

      {/* Occasions */}
      {activeOccasions.map((occasion, oi) => (
        <section
          key={occasion.id}
          className="px-6 pb-20 max-w-5xl mx-auto"
        >
          {/* Occasion header */}
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="font-display text-3xl md:text-4xl text-[#3d2a2a] mb-2">
              {occasion.label}
            </h2>
            <p className="text-sm text-[#9a7070]">{occasion.subtitle}</p>
          </div>

          {/* Template grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasion.templates.map((template, ti) => (
              <Link
                key={template.id}
                href={`/create/${occasion.id}/${template.id}`}
                className="group block animate-fade-up"
                style={{ animationDelay: `${(oi * 3 + ti) * 80}ms` }}
              >
                <div className="relative overflow-hidden rounded-4xl shadow-soft group-hover:shadow-card transition-all duration-300 group-hover:-translate-y-1 bg-white">
                  {/* Card image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={template.image}
                      alt={template.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-rose-DEFAULT/0 group-hover:bg-rose-DEFAULT/10 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white text-rose-DEFAULT text-sm font-medium px-5 py-2.5 rounded-full shadow-soft">
                        Choose this card
                      </span>
                    </div>
                  </div>

                  {/* Card name */}
                  <div className="px-5 py-4">
                    <p className="font-display text-lg text-[#3d2a2a]">
                      {template.name}
                    </p>
                    <p className="text-xs text-[#9a7070] mt-0.5">
                      {occasion.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="text-center pb-10 text-xs text-[#c4a0a0]">
        made with love ♡
      </footer>
    </main>
  );
}