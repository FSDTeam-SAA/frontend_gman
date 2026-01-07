const highlights = [
  {
    title: "Strategy to interface",
    description:
      "Translate fuzzy ideas into structured product narratives, then ship the UI with clean, reusable systems.",
  },
  {
    title: "Signal-rich visuals",
    description:
      "Design with contrast, typography, and motion that guide attention without overwhelming the story.",
  },
  {
    title: "Buildable outcomes",
    description:
      "Every concept is scoped for real delivery, with component-level detail and measurable impact.",
  },
];

export default function StudioHighlights() {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F97316]">
              About the studio
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0F172A] sm:text-4xl">
              A personal lab for product direction, visual systems, and
              frontend craft.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              The work here is a mix of paid engagements and self-directed
              builds. Every project is documented as a narrative with a clear
              problem, a crafted response, and a human-friendly interface.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                { label: "Core disciplines", value: "UX strategy, UI systems" },
                { label: "Delivery", value: "React, Next.js, Motion" },
                { label: "Collab style", value: "Async, workshop-first" },
                { label: "Availability", value: "Limited monthly slots" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#64748B]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#0F172A]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-[#0F172A]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
