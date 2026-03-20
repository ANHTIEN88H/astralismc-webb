import { motion } from "framer-motion";

export default function Hero({ onCopyIp, onJoinDiscord }) {
  const serverIp = "astralismc.xyz";

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800/70"
      style={{
        // Old background (with the rest of the UI overlaying on top).
        backgroundImage: "url('/assets/astralis-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Lớp phủ để chữ đọc rõ hơn trên ảnh nền */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-mcBg/90" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="pixel-title text-lg text-[#ADD8E6] md:text-2xl"
          >
            AstralisMC • MINECRAFT NETWORK
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="max-w-xl text-sm text-slate-200 md:text-base"
          >
            Khám phá một thế giới Minecraft hiện đại với{" "}
            <span className="text-[#ADD8E6]">Survival kinh điển</span>,{" "}
            <span className="text-[#ADD8E6]">Skyblock sáng tạo</span> và{" "}
            <span className="text-[#ADD8E6]">PvP cháy máy</span>. Anti-cheat,
            economy, custom items &amp; sự kiện hàng tuần.
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
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-xs text-slate-200 shadow-glowSoft transition hover:border-cyan-400 hover:text-cyan-200"
            >
              💬 Join Discord
            </button>
          </motion.div>

          <p className="text-[11px] text-slate-200">
            Hỗ trợ Java &amp; Bedrock • Không cần mod • Vào là chiến.
          </p>
        </div>

        {/* Fake parallax card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="panel relative flex-1 max-w-md bg-mcPanel/80 p-4"
        >
          <div className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-emerald-500/40 via-cyan-500/30 to-violet-500/30 blur-xl" />

          <div className="mb-3 flex items-center justify-between text-[11px] text-slate-300">
            <span className="pixel-title text-[9px] text-[#ADD8E6]">
              LIVE OVERVIEW
            </span>
            <span className="rounded-md bg-slate-900/80 px-2 py-1 text-[10px] text-[#ADD8E6]">
              24/7 ONLINE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="rounded-lg bg-slate-900/70 p-2">
              <div className="text-[10px] text-slate-400">Survival</div>
              <div className="mt-1 text-sm text-[#ADD8E6]">+120</div>
            </div>
            <div className="rounded-lg bg-slate-900/70 p-2">
              <div className="text-[10px] text-slate-400">Skyblock</div>
              <div className="mt-1 text-sm text-[#ADD8E6]">+80</div>
            </div>
            <div className="rounded-lg bg-slate-900/70 p-2">
              <div className="text-[10px] text-slate-400">PvP Arena</div>
              <div className="mt-1 text-sm text-[#ADD8E6]">+40</div>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-200">
            *Số liệu minh họa cho giao diện – status thật xem bên dưới.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
