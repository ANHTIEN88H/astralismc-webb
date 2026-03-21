import { motion } from "framer-motion";
import DiscordWidget from "../MinecraftDashboard/DiscordWidget";

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
    <header className="sticky top-0 z-30 border-b border-purple-700/30 bg-purple-500/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-white/20 shadow-glowSoft">
            <img
              src="/assets/astralis-logo.png"
              alt="AstralisMC logo"
              className="h-9 w-9 object-cover"
              draggable={false}
              data-header-logo="astralis-logo"
            />
          </div>
          <div>
            <div className="pixel-title text-sm md:text-base text-cyan-200 font-bold">
              ASTRALISMC
            </div>
            <p className="text-xs md:text-sm text-cyan-100/80">
              Survival • Skyblock • Mmorpg
            </p>
          </div>
        </motion.div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-medium text-sm md:text-base text-cyan-200 hover:text-cyan-100 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-300 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <DiscordWidget />
        </div>

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
