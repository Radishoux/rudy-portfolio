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
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(251,191,36,0.06) 0%, transparent 70%)",
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
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 mb-10 opacity-0 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" style={{ boxShadow: "0 0 6px #22c55e" }} />
          <span className="text-zinc-400 text-sm">Available for new opportunities</span>
        </div>

        {/* Name */}
        <h1
          className="text-6xl md:text-8xl font-bold text-zinc-100 mb-5 tracking-tight leading-none opacity-0 animate-fade-in-up animate-delay-100"
        >
          Rudy{" "}
          <span className="text-amber-400">Quinternet</span>
        </h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl text-zinc-400 mb-5 font-light opacity-0 animate-fade-in-up animate-delay-200">
          Software Engineer
        </p>

        {/* Tagline */}
        <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-md mx-auto leading-relaxed opacity-0 animate-fade-in-up animate-delay-300">
          Six years of experience, three in permanent position.
          <br />
          Paris, France &middot; NATO Secret Clearance
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-400">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm"
          >
            Contact me
          </a>
          <a
            href="/cv-rudy-quinternet.pdf"
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
