import { Check } from "lucide-react";

const rankPackages = [
  {
    name: "AETHER KNIGHT",
    subtitle: "Hiệp Sĩ",
    price: "100.000đ",
    titleColor: "text-cyan-300",
    priceColor: "text-cyan-200",
    borderColor: "border-cyan-400/40",
    glowEffect: "shadow-[0_0_36px_rgba(34,211,238,0.18)]",
    orbGradient: "from-cyan-400/35 via-cyan-500/20 to-transparent",
    buttonGradient: "from-cyan-400 via-sky-500 to-blue-600",
    perks: [
      "Tiền tố [Aether] trên chat",
      "Bay (Fly) trong sảnh",
      "x2 kinh nghiệm nghề nghiệp",
      "Bộ giáp khởi đầu đặc biệt",
      "Ưu tiên khi server đông người",
    ],
  },
  {
    name: "VOID WALKER",
    subtitle: "Hư Vô",
    price: "250.000đ",
    badge: "PHỔ BIẾN NHẤT",
    titleColor: "text-violet-300",
    priceColor: "text-violet-200",
    borderColor: "border-violet-400/45",
    glowEffect: "shadow-[0_0_42px_rgba(168,85,247,0.24)]",
    orbGradient: "from-violet-400/35 via-purple-500/20 to-transparent",
    buttonGradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    perks: [
      "Tiền tố [Void] trên chat",
      "Mở khóa /nick đổi màu tên",
      "x3 kinh nghiệm nghề nghiệp",
      "Kit khởi đầu Void Walker",
      "2 rương vật phẩm hằng tuần",
    ],
  },
  {
    name: "ASTRAL LORD",
    subtitle: "Chúa Tể",
    price: "500.000đ",
    titleColor: "text-amber-300",
    priceColor: "text-amber-200",
    borderColor: "border-amber-300/60",
    glowEffect:
      "shadow-[0_0_60px_rgba(251,146,60,0.42)] ring-1 ring-amber-300/35",
    orbGradient: "from-orange-400/45 via-amber-400/30 to-transparent",
    buttonGradient: "from-amber-400 via-orange-500 to-red-500",
    perks: [
      "Tiền tố [Astral] hiệu ứng rực sáng",
      "Bay (Fly) mọi khu vực cho phép",
      "x5 kinh nghiệm nghề nghiệp",
      "Bộ giáp khởi đầu Chúa Tể Astral",
      "Ưu tiên hỗ trợ và quà đăng nhập VIP",
    ],
  },
];

export default function StorePage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-10 md:space-y-12">
      <header className="text-center space-y-4 pt-2">
        <p className="text-xs md:text-sm font-bold tracking-[0.32em] text-cyan-200/90 uppercase">
          AstralisMC Donate Center
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]">
          CỬA HÀNG ASTRALIS
        </h1>
        <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-200">
          Ủng hộ server và nhận lại những đặc quyền xứng đáng. Mọi đóng góp đều
          giúp AstralisMC phát triển mạnh mẽ hơn.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {rankPackages.map((rank) => (
          <article
            key={rank.name}
            className={`relative overflow-hidden rounded-2xl border ${rank.borderColor} bg-slate-800/60 backdrop-blur p-6 md:p-7 flex flex-col transition duration-300 hover:-translate-y-1 ${rank.glowEffect}`}
          >
            {rank.badge && (
              <span className="absolute -top-3 right-4 rounded-full border border-amber-200/70 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 px-3 py-1 text-[10px] font-black tracking-wide text-amber-950 shadow-[0_0_18px_rgba(252,211,77,0.6)]">
                {rank.badge}
              </span>
            )}

            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${rank.orbGradient} blur-2xl`}
              aria-hidden="true"
            />

            <div className="relative z-10 border-b border-white/10 pb-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300 font-bold">
                {rank.subtitle}
              </p>
              <h2
                className={`mt-2 text-2xl md:text-[1.7rem] font-black tracking-wide uppercase ${rank.titleColor}`}
              >
                {rank.name}
              </h2>
              <p
                className={`mt-4 text-3xl md:text-4xl font-black ${rank.priceColor}`}
              >
                {rank.price}
              </p>
            </div>

            <ul className="relative z-10 mt-5 space-y-3.5 flex-1">
              {rank.perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2.5 text-slate-100"
                >
                  <Check className="mt-[2px] h-4 w-4 flex-none text-emerald-400" />
                  <span className="text-sm leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`relative z-10 mt-7 w-full rounded-xl bg-gradient-to-r ${rank.buttonGradient} px-5 py-3.5 text-base font-black uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(15,23,42,0.45)] transition-transform hover:scale-105 active:scale-95`}
            >
              MUA NGAY
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
