import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Signal Desk",
    summary:
      "An operations dashboard for a logistics team, distilled into a calm, chart-first control room.",
    focus: "Data visualization, workflows",
    status: "Anonymized client",
    tags: ["Product UI", "Analytics", "NDA-safe"],
  },
  {
    title: "Atlas Notes",
    summary:
      "A writing space for founders to plan launches, mapped as modular canvases and timelines.",
    focus: "Content systems, IA",
    status: "Speculative build",
    tags: ["Content", "Prototype", "React"],
  },
  {
    title: "Evening Loop",
    summary:
      "A personal habit studio with gentle prompts, ambient motion, and lightweight metrics.",
    focus: "Mobile-first, motion",
    status: "Personal project",
    tags: ["Interaction", "Design system", "Motion"],
  },
  {
    title: "Client Rooms",
    summary:
      "A private workspace for agencies to share deliverables without exposing live client URLs.",
    focus: "Security, collaboration",
    status: "Anonymized client",
    tags: ["B2B", "Workflow", "Security"],
  },
  {
    title: "Northbound Retail",
    summary:
      "A retail concept that pairs tactile product cards with a cinematic story grid.",
    focus: "Commerce narrative",
    status: "Concept sprint",
    tags: ["Ecom", "Branding", "UI kit"],
  },
  {
    title: "Field Audio",
    summary:
      "A listening library for interview clips, designed for quick tagging and story assembly.",
    focus: "Media tooling",
    status: "Anonymized client",
    tags: ["Audio", "Search", "Research"],
  },
];

export default function ProjectShowcase() {
  return (
    <section id="work" className="bg-[#0F172A] py-16 md:py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F97316]">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Projects crafted for clarity, privacy, and impact.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
              All client work is abstracted into NDA-safe case studies. You can
              request private walkthroughs for full context.
            </p>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em]">
            No direct client URLs
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-300">
                  <span>{project.status}</span>
                  <span className="text-[#F97316]">{project.focus}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto flex items-center gap-1 text-xs text-slate-200">
                  Case study on request
                  <ArrowUpRight className="h-3 w-3 text-[#F97316]" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
