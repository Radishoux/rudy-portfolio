import { profile } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Education" />

        <div className="mt-12 space-y-5">
          {profile.education.map((edu, i) => (
            <div
              key={i}
              className="flex items-center gap-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-200"
            >
              {/* Year badge */}
              <div className="shrink-0 text-center">
                <span className="text-2xl font-bold text-amber-400">
                  {edu.year}
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-zinc-700 shrink-0" />

              {/* Info */}
              <div>
                <h3 className="text-zinc-100 font-semibold text-lg">
                  {edu.degree}
                </h3>
                <p className="text-zinc-400 mt-0.5">
                  {edu.school}
                  <span className="text-zinc-600"> &middot; {edu.location}</span>
                </p>
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
