import { motion } from "framer-motion";

export default function Hero({ onCopyIp, onJoinDiscord }) {
  const serverIp = "astralismc.xyz";

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800/70"
      style={{
        backgroundImage: "url('/assets/astralis-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Strong gradient overlay - ensure text readability on bright background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="hero-title text-white minecraft-title-shadow"
          >
            <span className="font-black text-cyan-200">AstralisMC</span> •
            MINECRAFT NETWORK
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="max-w-xl text-base text-white md:text-lg minecraft-text-shadow leading-relaxed"
          >
            Khám phá một thế giới Minecraft hiện đại với{" "}
            <span className="text-cyan-200 font-bold">Survival kinh điển</span>,{" "}
            <span className="text-cyan-200 font-bold">Skyblock sáng tạo</span>{" "}
            và <span className="text-cyan-200 font-bold">PvP cháy máy</span>.
            Anti-cheat, economy, custom items &amp; sự kiện hàng tuần.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => onCopyIp(serverIp)}
              className="btn-glow text-xs md:text-sm"
            >
              ⛏ Copy IP: <span className="font-mono">{serverIp}</span>
            </button>
            <button
              onClick={onJoinDiscord}
              className="inline-flex items-center gap-2 rounded-lg border border-pink-400/50 bg-pink-500/25 backdrop-blur-md px-4 py-2 text-xs text-white transition-all duration-150 hover:border-pink-400 hover:bg-pink-500/35 active:scale-95 font-semibold"
            >
              💬 Join Discord
            </button>
          </motion.div>

          <p className="text-[11px] font-semibold text-white minecraft-text-shadow">
            Hỗ trợ Java &amp; Bedrock • Không cần mod • Vào là chiến.
          </p>
        </div>

        {/* Fake parallax card - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="panel relative flex-1 max-w-md backdrop-blur-md bg-white/10 border border-white/20 p-4"
        >
          <div className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-cyan-400/30 via-purple-400/20 to-pink-400/20 blur-xl" />

          <div className="mb-3 flex items-center justify-between text-[11px] text-white">
            <span className="pixel-title text-[9px] text-cyan-200 minecraft-text-shadow">
              LIVE OVERVIEW
            </span>
            <span className="rounded-md bg-slate-900/80 px-2 py-1 text-[10px] text-white font-bold minecraft-text-shadow">
              24/7 ONLINE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="rounded-lg bg-black/40 backdrop-blur-sm p-2 border border-white/20">
              <div className="text-[10px] text-cyan-100 font-semibold">
                Survival
              </div>
              <div className="mt-1 text-sm text-cyan-200 font-bold">+120</div>
            </div>
            <div className="rounded-lg bg-black/40 backdrop-blur-sm p-2 border border-white/20">
              <div className="text-[10px] text-cyan-100 font-semibold">
                Skyblock
              </div>
              <div className="mt-1 text-sm text-cyan-200 font-bold">+80</div>
            </div>
            <div className="rounded-lg bg-black/40 backdrop-blur-sm p-2 border border-white/20">
              <div className="text-[10px] text-cyan-100 font-semibold">
                PvP Arena
              </div>
              <div className="mt-1 text-sm text-cyan-200 font-bold">+40</div>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-white font-semibold minecraft-text-shadow">
            *Số liệu minh họa cho giao diện – status thật xem bên dưới.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
