export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm">
          &copy; {year} Rudy Quinternet. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-zinc-700 text-xs">
          <span>Built with</span>
          <span className="text-fuchsia-400/60 mx-1">Next.js + Tailwind</span>
          <span>&middot; Hosted on GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
}
