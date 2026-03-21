import { motion } from "framer-motion";

const topDonators = [
  {
    name: "AnhSuGame",
    amount: "1.500.000đ",
    rank: 1,
    avatar: "https://minotar.net/helm/AnhSuGame/100.png",
  },
  {
    name: "SteveVN",
    amount: "800.000đ",
    rank: 2,
    avatar: "https://minotar.net/helm/Steve/100.png",
  },
  {
    name: "Alex_Mc",
    amount: "500.000đ",
    rank: 3,
    avatar: "https://minotar.net/helm/Alex/100.png",
  },
  { name: "DragonPvP", amount: "450.000đ", rank: 4 },
  { name: "Miner_Master", amount: "400.000đ", rank: 5 },
  { name: "KingAstralis", amount: "350.000đ", rank: 6 },
  { name: "Susu_Sama", amount: "300.000đ", rank: 7 },
  { name: "Piggy_Bank", amount: "250.000đ", rank: 8 },
  { name: "NoobMaster69", amount: "200.000đ", rank: 9 },
  { name: "Warrior_Vn", amount: "150.000đ", rank: 10 },
];

export default function Leaderboard() {
  const topThree = topDonators.slice(0, 3);
  const others = topDonators.slice(3, 10);

  return (
    <section
      id="leaderboard"
      className="py-12 px-4 max-w-5xl mx-auto space-y-8"
    >
      {/* KHỐI 1: BẢNG VINH DANH (Gọn gàng) */}
      <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl">
        <h2 className="text-cyan-300 text-center mb-10 uppercase text-2xl font-bold minecraft-title-shadow tracking-[0.2em]">
          🏆 BẢNG VÀNG VINH DANH
        </h2>

        {/* Podium Top 3 */}
        <div className="flex flex-row items-end justify-center gap-2 md:gap-8 mb-12 border-b border-white/10 pb-12">
          {/* Top 2 */}
          <div className="flex flex-col items-center w-1/3">
            <img
              src={topThree[1].avatar}
              alt="t2"
              className="w-12 h-12 md:w-20 md:h-20 rounded-xl border-2 border-slate-400 mb-3 shadow-lg"
            />
            <div className="w-full bg-slate-500/20 border border-white/10 rounded-t-2xl p-3 text-center h-28 flex flex-col justify-center">
              <span className="text-slate-300 font-black text-lg">#2</span>
              <p className="text-white font-minecraft text-xs md:text-sm truncate">
                {topThree[1].name}
              </p>
              <p className="text-cyan-400 font-bold text-[10px] md:text-xs">
                {topThree[1].amount}
              </p>
            </div>
          </div>

          {/* Top 1 */}
          <div className="flex flex-col items-center w-1/3 scale-110 z-10">
            <span className="text-2xl mb-1 animate-bounce">👑</span>
            <img
              src={topThree[0].avatar}
              alt="t1"
              className="w-16 h-16 md:w-24 md:h-24 rounded-xl border-2 border-yellow-400 mb-3 shadow-xl shadow-yellow-400/40"
            />
            <div className="w-full bg-yellow-500/20 border border-yellow-400/40 rounded-t-3xl p-4 text-center h-36 flex flex-col justify-center ring-2 ring-yellow-400/20">
              <span className="text-yellow-400 font-black text-2xl">#1</span>
              <p className="text-white font-minecraft text-sm md:text-lg truncate font-bold">
                {topThree[0].name}
              </p>
              <p className="text-yellow-400 font-black text-xs md:text-sm">
                {topThree[0].amount}
              </p>
            </div>
          </div>

          {/* Top 3 */}
          <div className="flex flex-col items-center w-1/3">
            <img
              src={topThree[2].avatar}
              alt="t3"
              className="w-10 h-10 md:w-16 md:h-16 rounded-xl border-2 border-amber-700 mb-3 shadow-lg"
            />
            <div className="w-full bg-amber-900/20 border border-white/10 rounded-t-2xl p-3 text-center h-24 flex flex-col justify-center">
              <span className="text-amber-600 font-black text-lg">#3</span>
              <p className="text-white font-minecraft text-xs md:text-sm truncate">
                {topThree[2].name}
              </p>
              <p className="text-amber-600 font-bold text-[10px] md:text-xs">
                {topThree[2].amount}
              </p>
            </div>
          </div>
        </div>

        {/* Top 4 - 10: Chia 2 cột cực gọn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-12">
          {others.map((user) => (
            <div
              key={user.rank}
              className="flex items-center justify-between bg-white/5 border border-white/10 px-5 py-3 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-slate-500 font-black text-sm w-6">
                  #{user.rank}
                </span>
                <span className="text-slate-100 font-minecraft text-xs md:text-sm">
                  {user.name}
                </span>
              </div>
              <span className="text-cyan-400 font-bold text-xs">
                {user.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* KHỐI 2: QUÀ TẶNG & LUẬT (Gom chung vào 1 hàng) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quà tặng sáng sủa */}
        <div className="bg-black/50 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/30 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">🎁</span>
            <h3 className="text-white font-black text-lg uppercase tracking-wider">
              Quà Tặng Tri Ân
            </h3>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium">
            Vật phẩm nhận được là quà tặng tri ân dành cho sếp đã ủng hộ duy trì
            server.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Prefix VIP", "Items Kit", "Cosmetics"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full text-[10px] font-black uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Nội quy sáng sủa */}
        <div className="bg-black/50 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/30 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">⚖️</span>
            <h3 className="text-white font-black text-lg uppercase tracking-wider text-emerald-400">
              Luật Server
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-emerald-400 font-bold">●</span>
              <p className="text-slate-200 text-xs font-medium">
                Không toxic, xúc phạm người chơi khác.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-emerald-400 font-bold">●</span>
              <p className="text-slate-200 text-xs font-medium">
                Tuyệt đối không sử dụng Hack/Cheat/Bug.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
