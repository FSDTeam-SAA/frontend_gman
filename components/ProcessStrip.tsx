const steps = [
  {
    title: "Discovery",
    description: "Audit the current state, map constraints, and align on signals that matter.",
  },
  {
    title: "Direction",
    description: "Translate insights into flows, frames, and a narrative that leadership can repeat.",
  },
  {
    title: "Delivery",
    description: "Ship modular UI with handoff-ready specs or production-ready components.",
  },
];

export default function ProcessStrip() {
  return (
    <section id="process" className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F97316]">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0F172A] sm:text-4xl">
              A lightweight workflow built for momentum.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#475569]">
            Collaborative, asynchronous, and fast. Each phase ends with a
            tangible artifact you can share internally.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-[#F97316]">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
