import { motion } from "framer-motion";

const loreHighlights = [
  "Vết nứt Aether mở ra cổng đa vũ trụ tại AstralisMC.",
  "Rune cổ xưa rơi khắp overworld – ai chạm vào sẽ thức tỉnh sức mạnh.",
  "Liên minh người chơi triệu tập để ngăn hành tinh bị nuốt bởi Hư Vô.",
];

export default function Hero({ onCopyIp, onJoinDiscord }) {
  const serverIp = "astralismc.xyz";

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-cyan-400/10"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/astralis-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040712]/80 via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.2),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div className="space-y-6">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-xs tracking-[0.35em] uppercase text-cyan-200/80 font-semibold"
          >
            AstralisMC • MMORPG LAUNCH
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight minecraft-title-shadow"
          >
            THỨC TỈNH LỬA AETHER
            <span className="block text-cyan-300">BƯỚC VÀO KỶ NGUYÊN MMO</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-slate-200 text-base md:text-lg leading-relaxed"
          >
            Aether Rift đã xé toạc bầu trời. Những kẻ dũng cảm sẽ khai thác rune
            cổ, thuần phục thú huyền thoại và hợp lực để chống lại làn sóng Hư
            Vô tràn xuống Astralis.
          </motion.p>

          <motion.ul
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm"
          >
            {loreHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-md px-3 py-3 text-slate-100 shadow-[0_10px_40px_rgba(8,47,73,0.35)]"
              >
                <span className="text-cyan-300">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => onCopyIp(serverIp)}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-500/15 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,165,233,0.25)] transition hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-cyan-500/25 active:translate-y-0"
            >
              ⛏ Copy IP: <span className="font-mono">{serverIp}</span>
            </button>
            <button
              onClick={onJoinDiscord}
              className="inline-flex items-center gap-2 rounded-xl border border-pink-400/50 bg-pink-500/20 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(236,72,153,0.25)] transition hover:-translate-y-0.5 hover:border-pink-200/70 hover:bg-pink-500/30 active:translate-y-0"
            >
              💬 Join Discord
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              24/7 Online • Java & Bedrock
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-pink-500/20 blur-3xl" />

          <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 text-[11px] text-slate-200">
              <span className="pixel-title text-[10px] text-cyan-200 tracking-[0.25em]">
                LIVE REALM FEED
              </span>
              <span className="rounded-md bg-emerald-500/20 border border-emerald-400/40 px-2 py-1 text-[10px] font-bold text-emerald-100">
                SYNCED
              </span>
            </div>

            <div className="p-5 grid grid-cols-2 gap-4 text-sm text-white">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner space-y-2">
                <p className="text-[12px] text-cyan-200 font-semibold uppercase tracking-wide">
                  Frontline Instance
                </p>
                <div className="text-3xl font-black text-white">+160</div>
                <p className="text-[12px] text-slate-300">Player peak / ngày</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner space-y-2">
                <p className="text-[12px] text-cyan-200 font-semibold uppercase tracking-wide">
                  Skyblock Shard
                </p>
                <div className="text-3xl font-black text-white">+96</div>
                <p className="text-[12px] text-slate-300">Đảo đang hoạt động</p>
              </div>

              <div className="col-span-2 rounded-xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80 p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[12px] text-cyan-200 font-semibold uppercase tracking-wide">
                    Sự kiện tuần
                  </p>
                  <p className="text-base font-bold text-white">
                    Siege of Aethergate
                  </p>
                  <p className="text-[12px] text-slate-300">
                    Thời gian: 20:00 • Thứ Bảy
                  </p>
                </div>
                <button className="rounded-lg border border-cyan-300/40 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-500/20 transition">
                  Đăng ký nhanh
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
