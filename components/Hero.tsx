import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2E9]">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#F97316]/20 blur-3xl animate-float" />
        <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-[#0EA5E9]/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-t-full bg-white/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1F2937]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F2937]">
            Personal Project Showcase
          </span>
          <h1 className="mt-6 text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
            Building calm, confident digital products with bold systems and human
            motion.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#334155] sm:text-lg">
            A curated archive of anonymized case studies, speculative concepts,
            and shipped experiments. No direct client URLs, just the thinking,
            outcomes, and craft.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-[#0F172A] text-white hover:bg-[#1E293B]">
              <Link href="/#work">View Selected Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A]/5"
            >
              <Link href="/#contact">Start a Conversation</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 rounded-2xl border border-white/70 bg-white/70 p-6 text-left shadow-sm sm:grid-cols-3">
            {[
              { label: "Projects shipped", value: "18+" },
              { label: "Focus areas", value: "Product, UI, Frontend" },
              { label: "Case studies", value: "Anonymized + NDA-safe" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-[0.18em] text-[#64748B]">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-[#0F172A]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
