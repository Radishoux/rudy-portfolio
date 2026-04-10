import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {profile.skills.map((group) => (
            <div
              key={group.category}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-200"
            >
              <h3 className="text-zinc-100 font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-zinc-100 mb-3">{title}</h2>
      <div className="h-1 w-12 bg-amber-400 rounded-full" />
    </div>
  );
}
