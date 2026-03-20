import { motion } from "framer-motion";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#modes", label: "Game Modes" },
  { href: "#info", label: "Server Info" },
  { href: "#store", label: "Store" },
  { href: "#rules", label: "Rules" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ onPlayClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-mcBg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-mcPanel/80 shadow-glowSoft">
            {/* /public/assets/astralis-logo.png */}
            <img
              src="/assets/astralis-logo.png"
              alt="AstralisMC logo"
              className="h-9 w-9 object-cover"
              draggable={false}
              data-header-logo="astralis-logo"
            />
          </div>
          <div>
            <div className="pixel-title text-xs text-[#ADD8E6]">AstralisMC</div>
            <p className="text-[11px] text-slate-200">
              Survival • Skyblock • Mmorpg
            </p>
          </div>
        </motion.div>

        <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-medium text-slate-300 transition-colors hover:text-[#ADD8E6]"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded bg-gradient-to-r from-[#ADD8E6] to-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <motion.button
          whileTap={{ scale: 0.96 }}
          className="btn-glow hidden text-xs md:inline-flex"
          onClick={onPlayClick}
        >
          ▶ Play Now
        </motion.button>
      </div>
    </header>
  );
}
