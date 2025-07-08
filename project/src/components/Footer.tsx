export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-slate-200/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-light text-slate-800 mb-2">
              Kshitij Narayan Kulkarni
            </h3>
            <p className="text-slate-500 text-sm">Software Developer</p>
          </div>

          <div className="text-slate-500 text-sm">
            © 2025 — Designed with care, built for inspiration
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/50 text-center">
          <p className="text-slate-400 text-xs font-light">
            Where technology and artistry unite, innovation comes to life.
          </p>
        </div>
      </div>
    </footer>
  );
}
