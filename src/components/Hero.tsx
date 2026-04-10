import { asset } from "@/lib/path";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(217,70,239,0.08) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3f3f46 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Photo */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
          <div
            className="rounded-full p-0.5"
            style={{
              background:
                "linear-gradient(135deg, rgba(217,70,239,0.7) 0%, rgba(139,92,246,0.7) 100%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/rudy-pp.jpg")}
              alt="Rudy Quinternet"
              width={128}
              height={128}
              className="rounded-full object-cover block w-32 h-32"
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 mb-10 opacity-0 animate-fade-in-up animate-delay-100">
          <span
            className="w-2 h-2 rounded-full bg-green-500 inline-block"
            style={{ boxShadow: "0 0 6px #22c55e" }}
          />
          <span className="text-zinc-400 text-sm">
            Available for new opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold text-zinc-100 mb-5 tracking-tight leading-none opacity-0 animate-fade-in-up animate-delay-200">
          Rudy <span className="text-fuchsia-400">Quinternet</span>
        </h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl text-zinc-400 mb-5 font-light opacity-0 animate-fade-in-up animate-delay-300">
          Software Engineer
        </p>

        {/* Tagline */}
        <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-md mx-auto leading-relaxed opacity-0 animate-fade-in-up animate-delay-400">
          Six years of experience, three in permanent position.
          <br />
          Netherlands &middot; Full-stack &middot; Open to relocation
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 opacity-0 animate-fade-in-up animate-delay-400">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm"
          >
            Contact me
          </a>
          <a
            href={asset("/cv-rudy-quinternet.pdf")}
            download
            className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-100 hover:bg-zinc-900 px-8 py-3.5 rounded-full transition-colors duration-200 text-sm"
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

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-400">
          <SocialLink href="https://www.linkedin.com/in/rudy-quinternet/" label="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href="https://github.com/Radishoux" label="GitHub">
            <GitHubIcon />
          </SocialLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, #52525b, transparent)",
          }}
        />
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 hover:border-fuchsia-500/50 hover:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-fuchsia-400 transition-all duration-200"
    >
      {children}
    </a>
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
