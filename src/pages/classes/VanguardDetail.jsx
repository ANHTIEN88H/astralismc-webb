import React from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    icon: "🛡️",
    name: "Aegis Crash",
    description:
      "Lao tới bằng khiên rune, hất tung kẻ địch tuyến trước và tạo vùng làm chậm.",
  },
  {
    icon: "⚔️",
    name: "Bulwark Cleave",
    description:
      "Vung đại kiếm theo hình vòng cung, gây sát thương theo phần trăm giáp của mục tiêu.",
  },
  {
    icon: "🔰",
    name: "Guardian Oath",
    description:
      "Kích hoạt khế ước bảo hộ, tăng giáp cho toàn đội và giảm sát thương nhận vào.",
  },
];

const stats = [
  { label: "Sinh lực", value: 92, color: "bg-cyan-400" },
  { label: "Công kích", value: 68, color: "bg-indigo-400" },
  { label: "Phòng thủ", value: 95, color: "bg-emerald-400" },
  { label: "Khống chế", value: 84, color: "bg-purple-400" },
  { label: "Cơ động", value: 52, color: "bg-amber-400" },
];

export default function VanguardDetail() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />
      <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-8">
        <Link
          to="/classes"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-cyan-300/40 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-200 transition hover:bg-cyan-500/20"
        >
          ← Quay lại Classes
        </Link>

        <article className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:grid-cols-[1.05fr_1fr] md:p-8">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-900/80">
              <img
                src="/assets/pvp-arena.png"
                alt="Vanguard Class"
                className="h-[300px] w-full object-cover shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Lore
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Vanguard là thủ lĩnh tiền tuyến của Astralis Legion. Sau cuộc
                Đại Phân Rã Thiên Hà, họ trở thành lớp nhân vật được rèn luyện
                để mở đường cho đồng đội trong các trận siege. Khả năng chống
                chịu vượt trội cùng đòn phản công nặng nề giúp Vanguard luôn là
                mũi nhọn để bẻ gãy mọi thế trận phòng thủ.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">
                Tank • Frontline
              </p>
              <h1 className="mt-2 text-3xl font-black text-white minecraft-title-shadow md:text-4xl">
                Vanguard
              </h1>
            </header>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                Kỹ năng
              </h2>
              <ul className="mt-4 space-y-3">
                {skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <p className="text-sm font-bold text-white">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      {skill.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                Chỉ số sức mạnh
              </h2>
              <div className="mt-4 space-y-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>{stat.label}</span>
                      <span className="font-bold text-white">{stat.value}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${stat.color}`}
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
