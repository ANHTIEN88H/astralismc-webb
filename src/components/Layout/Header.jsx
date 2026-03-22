import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DiscordWidget from "../MinecraftDashboard/DiscordWidget";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/modes", label: "Game Modes" },
  { to: "/info", label: "Server Info" },
  { to: "/leaderboard", label: "Vinh Danh" },
  { to: "/store", label: "Store" },
  { to: "/rules", label: "Rules" },
  { to: "/contact", label: "Contact" },
];

export default function Header({ onPlayClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-purple-700/30 bg-purple-500/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* KHU VỰC LOGO & TÊN SERVER */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-3"
          >
            {/* Logo */}
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white/20 shadow-glowSoft group-hover:scale-105 transition-transform">
              <img
                src="/assets/astralis-logo.png"
                alt="Logo"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            {/* Chữ: AstralisMC + Mô tả */}
            <div className="flex flex-col">
              <div className="pixel-title text-base md:text-lg text-cyan-200 font-bold uppercase leading-tight tracking-wider">
                ASTRALISMC
              </div>
              <p className="text-[10px] md:text-xs text-cyan-100/80 font-medium leading-tight">
                Survival • Skyblock • Mmorpg
              </p>
            </div>
          </motion.div>
        </Link>

        {/* NAVIGATION TABS */}
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative font-medium text-xs md:text-sm text-cyan-200 hover:text-cyan-100 transition-all hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-300 transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* WIDGET & NÚT PLAY */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <DiscordWidget />
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            className="btn-glow text-xs px-4 py-2"
            onClick={onPlayClick}
          >
            ▶ Play Now
          </motion.button>
        </div>
      </div>
    </header>
  );
}
