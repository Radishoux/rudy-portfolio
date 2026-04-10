import { profile } from "@/data/profile";
import { asset } from "@/lib/path";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Contact" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Available for new opportunities — freelance, contract, or full-time.
              <br />
              Feel free to reach out.
            </p>

            <div className="space-y-10">
              <ContactItem
                icon={<EmailIcon />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactItem
                icon={<PhoneIcon />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              />
              <ContactItem
                icon={<LocationIcon />}
                label="Location"
                value={`${profile.location} · Open to relocation`}
              />
              <ContactItem
                icon={<LinkedInIcon />}
                label="LinkedIn"
                value="rudy-quinternet"
                href={profile.linkedin}
              />
              <ContactItem
                icon={<GitHubIcon />}
                label="GitHub"
                value="Radishoux"
                href={profile.github}
              />
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-5">
            <h3 className="text-zinc-100 font-bold text-xl">
              Let&apos;s work together
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Senior full-stack engineer with production experience in AI, defense
              and logistics. Available now in Paris or remote.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm"
              >
                Send an email
              </a>
              <a
                href={asset("/cv-rudy-quinternet.pdf")}
                download
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 px-6 py-3 rounded-full transition-colors duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/30 transition-colors shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-zinc-500 text-xs uppercase tracking-wider">{label}</p>
        <p className="text-zinc-300 group-hover:text-zinc-100 transition-colors mt-0.5">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-5">
      <span className="text-6xl font-black text-zinc-800 select-none leading-none tabular-nums">05</span>
      <div>
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{title}</h2>
        <div className="h-0.5 w-10 bg-fuchsia-500 rounded-full" />
      </div>
    </div>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
