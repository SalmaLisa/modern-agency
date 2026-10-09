export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="container flex items-center justify-between px-6 py-6">

        <a
          href="/"
          className="text-2xl font-semibold tracking-tight text-white"
        >
          Hubfolio°
        </a>

        <div className="hidden items-center gap-8 text-xs text-white/70 md:flex">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>

          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </div>

        <a href="/edit"
          className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
  Edit This Page

        </a>

      </div>
    </header>
  );
}