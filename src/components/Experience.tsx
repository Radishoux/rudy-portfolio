import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Experience" />

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-zinc-800 hidden sm:block" />

          <div className="space-y-12">
            {profile.experience.map((exp, i) => (
              <div key={i} className="relative sm:pl-14">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-200">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="text-zinc-500 text-sm">{exp.period}</span>
                      <h3 className="text-xl font-bold text-zinc-100 mt-1">
                        {exp.role}
                      </h3>
                      <p className="text-fuchsia-400 font-medium mt-0.5">
                        {exp.company}
                        <span className="text-zinc-600 font-normal">
                          {" "}
                          &middot; {exp.location}
                        </span>
                      </p>
                    </div>

                    {exp.badge && (
                      <span className="inline-flex items-center gap-1.5 text-xs bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 px-3 py-1.5 rounded-full shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-zinc-800 border border-zinc-700 text-zinc-300 px-2.5 py-1 rounded-full"
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

function SectionHeader({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-zinc-100 mb-3">{title}</h2>
      <div className="h-1 w-12 bg-fuchsia-500 rounded-full" />
    </div>
  );
}
