import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactCta() {
  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#0F172A] px-6 py-12 text-white md:px-12">
          <div className="absolute right-0 top-0 h-48 w-48 -translate-y-1/3 translate-x-1/3 rounded-full bg-[#F97316]/30 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F97316]">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Want the private deck or a deeper walkthrough?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                I keep client work private by default. Share a little context
                and I can provide a tailored, NDA-friendly case study packet.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-white text-[#0F172A] hover:bg-slate-100">
                <Link href="mailto:hello@studiosignal.dev">Request Case Studies</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/#work">Review the Archive</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
