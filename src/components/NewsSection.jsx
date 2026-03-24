const latestNews = [
  {
    id: "aether-rift-1-8",
    tag: "CẬP NHẬT",
    tagClass:
      "border-amber-300/60 bg-amber-400/15 text-amber-100 shadow-[0_0_18px_rgba(251,191,36,0.25)]",
    title: "Patch 1.8: Aether Rift mở thêm 12 tầng Dungeon",
    date: "24/03/2026",
    description:
      "Tăng độ hiếm rune cổ, bổ sung cơ chế boss liên server và cân bằng lại sát thương kỹ năng diện rộng.",
    coverClass:
      "bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_35%,#0ea5e9_100%)]",
  },
  {
    id: "blood-moon-siege",
    tag: "SỰ KIỆN",
    tagClass:
      "border-red-300/60 bg-red-500/15 text-red-100 shadow-[0_0_18px_rgba(239,68,68,0.25)]",
    title: "Blood Moon Siege sẽ bắt đầu lúc 20:00 Thứ Bảy",
    date: "23/03/2026",
    description:
      "Liên minh Astralis cần bảo vệ thành Aethergate trong 5 đợt tấn công. Phần thưởng gồm skin giới hạn và pet huyền thoại.",
    coverClass:
      "bg-[linear-gradient(135deg,#020617_0%,#7f1d1d_45%,#ef4444_100%)]",
  },
  {
    id: "season-zero-rank-reset",
    tag: "THÔNG BÁO",
    tagClass:
      "border-cyan-300/60 bg-cyan-500/15 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.25)]",
    title: "Season Zero chuẩn bị reset xếp hạng PvE vào cuối tháng",
    date: "21/03/2026",
    description:
      "Bảng xếp hạng sẽ chốt thưởng theo mốc cấp độ và số boss tiêu diệt. Đừng quên hoàn thành chuỗi nhiệm vụ tuần trước khi reset.",
    coverClass:
      "bg-[linear-gradient(135deg,#0b1120_0%,#164e63_45%,#22d3ee_100%)]",
  },
];

export default function NewsSection() {
  return (
    <section className="relative border-b border-cyan-400/10 bg-gradient-to-b from-[#020617]/90 to-[#02040d]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="mb-8 space-y-3 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
            BẢN TIN AETHER
          </p>
          <h2 className="text-3xl font-black uppercase leading-tight text-white md:text-4xl minecraft-title-shadow">
            TIN TỨC & CẬP NHẬT
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Theo dõi các thông báo nóng nhất từ đội ngũ AstralisMC để không bỏ
            lỡ bản vá, sự kiện giới hạn và thay đổi meta quan trọng.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {latestNews.map((news) => (
            <article
              key={news.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="relative h-44 overflow-hidden">
                <div
                  className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${news.coverClass}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                <span
                  className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${news.tagClass}`}
                >
                  {news.tag}
                </span>
              </div>

              <div className="space-y-3 p-4 md:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {news.date}
                </p>
                <h3 className="text-lg font-black leading-snug text-white">
                  {news.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {news.description}
                </p>

                <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">
                  Xem chi tiết
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ➜
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
