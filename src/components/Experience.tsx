import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Experience" number="03" />

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-zinc-800 hidden sm:block" />

          <div className="space-y-8">
            {profile.experience.map((exp, i) => (
              <div key={i} className="relative sm:pl-14">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-5 w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
                </div>

                <div className="bg-zinc-900 border border-zinc-800 border-l-2 border-l-fuchsia-500/30 rounded-2xl p-6 hover:border-zinc-700 hover:border-l-fuchsia-500/60 transition-all duration-200">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <span className="inline-flex items-center text-xs text-zinc-500 bg-zinc-800 border border-zinc-700 px-2.5 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span className="text-xs text-zinc-600">{exp.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 mt-3 mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-fuchsia-400 font-medium text-sm mb-4">
                    {exp.company}
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-zinc-800 border border-zinc-700/80 text-zinc-400 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, number }: { title: string; number: string }) {
  return (
    <div className="flex items-center gap-5">
      <span className="text-6xl font-black text-zinc-800 select-none leading-none tabular-nums">
        {number}
      </span>
      <div>
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{title}</h2>
        <div className="h-0.5 w-10 bg-fuchsia-500 rounded-full" />
      </div>
    </div>
  );
}
