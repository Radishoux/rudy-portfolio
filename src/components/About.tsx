import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="About" />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Left column */}
          <div className="space-y-6">
            <p className="text-zinc-400 text-lg leading-relaxed">
              Full-stack software engineer with six years of experience across
              logistics, defense, and AI-driven products. Comfortable leading
              projects end-to-end — from quick MVPs to hardened production
              systems.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Holds a{" "}
              <span className="text-fuchsia-400 font-medium">
                NATO Secret Clearance
              </span>
              , willing to relocate, and always learning — currently picking up
              Dutch.
            </p>

            {/* Info rows */}
            <div className="space-y-4 pt-2">
              <InfoRow
                icon={<LocationIcon />}
                label="Location"
                value={`${profile.location} · Open to relocation`}
              />
              <InfoRow
                icon={<LockIcon />}
                label="Clearance"
                value={profile.clearance}
                highlight
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Languages */}
            <div>
              <h3 className="text-zinc-300 font-semibold mb-3 text-sm uppercase tracking-wider">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm px-4 py-2 rounded-full"
                  >
                    {lang.name}
                    <span className="text-zinc-500 text-xs">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-zinc-300 font-semibold mb-3 text-sm uppercase tracking-wider">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-sm px-4 py-2 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
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

function InfoRow({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className={highlight ? "text-fuchsia-400 font-medium" : "text-zinc-300"}>
          {value}
        </p>
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

function LockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
