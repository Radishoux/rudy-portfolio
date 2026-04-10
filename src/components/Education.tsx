import { profile } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Education" number="04" />

        <div className="mt-12 space-y-4">
          {profile.education.map((edu, i) => (
            <div
              key={i}
              className="flex items-center gap-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-200"
            >
              {/* Year */}
              <div className="shrink-0 text-center min-w-[64px]">
                <span className="text-3xl font-black text-zinc-700 tabular-nums leading-none">
                  {edu.year}
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-14 bg-zinc-700/60 shrink-0" />

              {/* Info */}
              <div>
                <h3 className="text-zinc-100 font-semibold">{edu.degree}</h3>
                <p className="text-fuchsia-400 text-sm font-medium mt-0.5">{edu.school}</p>
                <p className="text-zinc-600 text-xs mt-1">{edu.location}</p>
              </div>
            </div>
          ))}
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
