export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-slate-200">AstralisMC</span> Network •
          Not an official Minecraft product.
        </p>
        <div className="flex items-center gap-4">
          <a href="#hero" className="hover:text-[#ADD8E6]">
            Home
          </a>
          <a href="#rules" className="hover:text-[#ADD8E6]">
            Rules
          </a>
          <a
            href="https://discord.gg/rzBWcVMp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ADD8E6]"
          >
            Discord
          </a>
          <a
            href="https://store.example.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ADD8E6]"
          >
            Store
          </a>
        </div>
      </div>
    </footer>
  );
}
