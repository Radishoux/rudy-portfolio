import { profile } from "@/data/profile";

const categoryColor: Record<string, string> = {
  "Backend":           "#8B5CF6",
  "Frontend":          "#D946EF",
  "Mobile":            "#A855F7",
  "Cloud & Serverless":"#6366F1",
  "Databases":         "#06B6D4",
  "Tools & Methods":   "#14B8A6",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Skills" number="02" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {profile.skills.map((group) => {
            const color = categoryColor[group.category] ?? "#D946EF";
            return (
              <div
                key={group.category}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-200 hover:shadow-lg group"
                style={{ "--card-color": color } as React.CSSProperties}
              >
                {/* Color stripe */}
                <div className="h-0.5" style={{ background: color }} />

                <div className="p-6">
                  <h3 className="text-zinc-100 font-semibold mb-4 text-sm flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: color }}
                    />
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-zinc-800 border border-zinc-700/80 text-zinc-300 px-3 py-1.5 rounded-lg hover:border-zinc-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
