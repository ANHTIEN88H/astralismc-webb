import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const classes = [
  {
    name: "Vanguard",
    role: "Tiên phong thiết giáp",
    desc: "Lá chắn cổ rune kết hợp đại kiếm, mở giao tranh và bẻ gãy đội hình địch.",
    accent: "from-indigo-500/40 to-cyan-400/30",
    icon: "🛡️",
    aura: "shadow-[0_0_40px_rgba(56,189,248,0.45)]",
    stats: [
      "Durability: S",
      "Control: Shield Break",
      "Team Aura: Guardian's Oath",
    ],
    detailPath: "/classes/vanguard",
  },
  {
    name: "Aether Mage",
    role: "Pháp sư hỗn nguyên",
    desc: "Điều khiển bão mana, đóng băng chiến trường và dồn sát thương diện rộng.",
    accent: "from-purple-500/40 to-fuchsia-400/30",
    icon: "✨",
    aura: "shadow-[0_0_40px_rgba(192,132,252,0.45)]",
    stats: ["AOE: Arcane Tempest", "CC: Freeze Zone", "Burst: Astral Nova"],
    detailPath: "/classes/aether-mage",
  },
  {
    name: "Void Walker",
    role: "Sát thủ hư không",
    desc: "Xuyên bóng tối, ám sát tuyến sau và đặt ấn hư không gây nổ chuỗi.",
    accent: "from-emerald-500/40 to-lime-400/25",
    icon: "⚔️",
    aura: "shadow-[0_0_40px_rgba(52,211,153,0.45)]",
    stats: [
      "Mobility: Void Dash",
      "Execute: Rift Mark",
      "Stealth: Phase Cloak",
    ],
    detailPath: "/classes/void-walker",
  },
];

export default function ClassesShowcase() {
  return (
    <section className="relative overflow-hidden py-16 px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-black" />
      <div className="absolute inset-x-0 top-10 h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/8 to-pink-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.35em] text-cyan-300/80 uppercase">
            AstralisMC • MMORPG ERA
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white minecraft-title-shadow">
            LỰA CHỌN LỚP NHÂN VẬT
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Bộ ba huyền thoại cho cuộc chiến đa vũ trụ. Chọn phong cách của bạn,
            phối hợp skill, và khắc tên vào bảng vàng AstralisMC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, idx) => (
            <motion.div
              key={cls.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 120 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-[1px] transition-transform duration-300 hover:scale-[1.03] hover:border-cyan-300/60 hover:shadow-[0_0_32px_rgba(34,211,238,0.35)]"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${cls.accent}`}
              />
              <div className="relative h-full rounded-2xl bg-slate-900/70 border border-white/10 p-5 flex flex-col gap-4 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(8,47,73,0.45)]">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{cls.icon}</div>
                  <span className="text-[10px] font-semibold text-cyan-200 tracking-[0.2em]">
                    MMORPG
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white minecraft-text-shadow">
                    {cls.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90 font-semibold">
                    {cls.role}
                  </p>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed flex-1">
                  {cls.desc}
                </p>

                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <div className="px-3 py-2 text-[11px] text-cyan-200 font-semibold tracking-[0.15em] uppercase">
                    Hover để xem chi tiết
                  </div>
                  <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col gap-2 px-4 py-4 text-sm text-slate-100 opacity-0 group-hover:opacity-100 transition duration-300">
                    {cls.stats.map((s) => (
                      <div
                        key={s}
                        className="flex items-center gap-2 text-xs border-b border-white/5 pb-2 last:border-none last:pb-0"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={cls.detailPath}
                  className="relative z-10 mt-1 inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:text-white hover:shadow-[0_0_16px_rgba(34,211,238,0.45)]"
                >
                  Xem Chi Tiết
                </Link>

                <div
                  className={`absolute -inset-10 opacity-0 group-hover:opacity-100 transition duration-500 blur-3xl ${cls.aura}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
