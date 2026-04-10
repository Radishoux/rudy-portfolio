import { profile } from "@/data/profile";

const highlights = [
  "End-to-end development — from quick MVPs to production-grade systems",
  "Production experience in AI, defense, and logistics",
  "Full-stack & mobile (Flutter, React Native)",
  "Cloud deployments on AWS & GCP",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="About" number="01" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left column */}
          <div className="space-y-6">
            <p className="text-zinc-300 text-lg leading-relaxed">
              Full-stack engineer with six years of experience building
              products that ship. I move comfortably between backend APIs,
              reactive frontends, and mobile — and I care as much about
              code quality as delivery speed.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Based in the Netherlands (Utrecht&nbsp;/&nbsp;Tiel area), open
              to relocation, and always learning — currently picking up Dutch.
            </p>

            {/* What I bring */}
            <div className="pt-2 space-y-3">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-fuchsia-500 block"
                  />
                  <span className="text-zinc-400 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 shrink-0">
                <LocationIcon />
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider">Location</p>
                <p className="text-zinc-300 text-sm mt-0.5">
                  {profile.location} &middot; Open to relocation
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Languages */}
            <div>
              <h3 className="text-zinc-300 font-semibold mb-4 text-xs uppercase tracking-widest">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 text-sm px-4 py-2.5 rounded-xl"
                  >
                    <span>{lang.name}</span>
                    <span className="text-zinc-500 text-xs border-l border-zinc-700 pl-2">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-zinc-300 font-semibold mb-4 text-xs uppercase tracking-widest">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 text-sm px-4 py-2.5 rounded-xl"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-zinc-300 font-semibold text-xs uppercase tracking-widest mb-3">
                Currently
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" style={{ boxShadow: "0 0 6px #22c55e" }} />
                  <span className="text-zinc-400">Open to new opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0" />
                  <span className="text-zinc-400">Learning Dutch</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                  <span className="text-zinc-400">Freelance projects available</span>
                </div>
              </div>
            </div>
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

function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
