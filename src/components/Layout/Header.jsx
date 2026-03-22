import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import DiscordWidget from "../MinecraftDashboard/DiscordWidget";
// ✅ FIX: Bỏ dấu ngoặc nhọn ở LoginModal vì sếp dùng export default
import LoginModal from "../LoginModal";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/modes", label: "Game Modes" },
  { to: "/info", label: "Server Info" },
  { to: "/leaderboard", label: "Vinh Danh" },
  { to: "/store", label: "Donate - Store" },
  { to: "/rules", label: "Rules" },
  { to: "/contact", label: "Contact" },
];

export default function Header({ onPlayClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [audio] = useState(() => {
    const a = new Audio(
      "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",
    );
    a.volume = 0.25;
    return a;
  });

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-purple-700/30 bg-purple-500/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* LOGO & NAME */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity group"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center overflow-hidden rounded-md bg-white/10 shadow-glowSoft border border-white/5 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/astralis-logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover p-0.5"
                  draggable={false}
                />
              </div>
              <div className="flex flex-col">
                <div className="pixel-title text-sm md:text-lg text-cyan-200 font-bold uppercase leading-tight tracking-wider">
                  ASTRALISMC
                </div>
                <p className="text-[9px] md:text-xs text-cyan-100/80 font-medium leading-tight">
                  Survival • Skyblock • Mmorpg
                </p>
              </div>
            </motion.div>
          </Link>

          {/* NAV TABS (PC) */}
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

          {/* ACTIONS (LOGIN, PLAY, MENU) */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:flex">
              <DiscordWidget />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleLoginOpen}
              className="flex items-center gap-1 bg-[#8b4513] hover:bg-[#a0522d] text-white text-[10px] md:text-xs px-2 py-1.5 md:px-4 md:py-2 rounded border-b-4 border-black/30 shadow-lg active:border-b-0 active:translate-y-px transition-all font-bold uppercase tracking-tighter md:tracking-normal"
            >
              🔑 <span className="hidden xs:inline">Login</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.96 }}
              className="btn-glow text-[10px] md:text-xs px-2 py-1.5 md:px-5 md:py-2.5 rounded active:translate-y-px font-bold"
              onClick={onPlayClick}
            >
              ▶ <span className="hidden xs:inline">Play Now</span>
            </motion.button>

            {/* HAMBURGER MENU (MOBILE) */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-md border-2 border-cyan-400/30 bg-black/30 text-cyan-200 shadow-inner"
              onClick={handleMenuClick}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 90 : 0 }}
                className="relative h-4 w-5 flex flex-col justify-between"
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
                  className="h-0.5 w-full bg-cyan-200 rounded"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  className="h-0.5 w-full bg-cyan-200 rounded"
                />
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -6.5 : 0,
                  }}
                  className="h-0.5 w-full bg-cyan-200 rounded"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full z-40 p-4 border-b-2 border-purple-700/50 bg-purple-950/95 backdrop-blur-lg shadow-2xl rounded-b-xl md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      to={item.to}
                      className="block w-full p-3 rounded-lg bg-black/20 border-2 border-white/5 text-cyan-200 text-center uppercase text-sm font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* LOGIN MODAL */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
