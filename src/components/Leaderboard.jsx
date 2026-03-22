import { motion } from "framer-motion";
import SkinViewer from "./SkinViewer";

// LINK TEXTURE CHUẨN TỪ MOJANG CỦA SẾP
const MySkinFile =
  "https://textures.minecraft.net/texture/c906e07cf2ea820cd30135f6420a81c297aee68ead68f076ec30150939c4f850";

const topDonators = [
  { name: "AnhSuGame", amount: "1.500.000đ", rank: 1 },
  { name: "SteveVN", amount: "800.000đ", rank: 2 },
  { name: "Alex_Mc", amount: "500.000đ", rank: 3 },
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

  // Link dự phòng cho các Top khác
  const getFallbackSkin = (username) =>
    `https://crafatar.com/renders/body/${username}?overlay`;

  return (
    <section
      id="leaderboard"
      className="py-12 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start"
    >
      {/* ================= PHẦN TRÁI: BẢNG VINH DANH ================= */}
      <div className="flex-1 w-full bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl">
        <h2 className="text-cyan-300 text-center mb-10 uppercase text-2xl font-bold minecraft-title-shadow tracking-widest">
          🏆 BẢNG VÀNG VINH DANH 🏆
        </h2>

        <div className="flex flex-row items-end justify-center gap-2 md:gap-8 mb-12 border-b border-white/10 pb-12">
          {/* TOP 2 */}
          <div className="flex flex-col items-center w-1/3">
            <img
              src={getFallbackSkin(topThree[1].name)}
              alt="t2"
              className="h-32 md:h-48 object-contain mb-3"
            />
            <div className="w-full bg-slate-500/20 border border-white/10 rounded-t-2xl p-3 text-center">
              <span className="text-slate-300 font-black text-lg">#2</span>
              <p className="text-white font-minecraft text-[10px] md:text-sm truncate mt-1">
                {topThree[1].name}
              </p>
              <p className="text-cyan-400 font-bold text-[10px]">
                {topThree[1].amount}
              </p>
            </div>
          </div>

          {/* TOP 1 - NHÂN VẬT 3D CHUYỂN ĐỘNG */}
          <div className="flex flex-col items-center w-1/3 scale-110 z-10">
            <span className="text-3xl mb-1 animate-bounce">👑</span>

            <div className="w-full flex justify-center items-center py-2 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)] z-10 relative">
              <SkinViewer skinUrl={MySkinFile} width={140} height={210} />
            </div>

            <div className="w-full bg-yellow-500/20 border border-yellow-400/40 rounded-t-3xl p-4 text-center ring-2 ring-yellow-400/20 mt-2">
              <span className="text-yellow-400 font-black text-2xl">#1</span>
              <p className="text-white font-minecraft text-xs md:text-lg truncate font-bold mt-1">
                {topThree[0].name}
              </p>
              <p className="text-yellow-400 font-black text-xs md:text-sm">
                {topThree[0].amount}
              </p>
            </div>
          </div>

          {/* TOP 3 */}
          <div className="flex flex-col items-center w-1/3">
            <img
              src={getFallbackSkin(topThree[2].name)}
              alt="t3"
              className="h-28 md:h-40 object-contain mb-3"
            />
            <div className="w-full bg-amber-900/20 border border-white/10 rounded-t-2xl p-3 text-center">
              <span className="text-amber-600 font-black text-lg">#3</span>
              <p className="text-white font-minecraft text-[10px] md:text-sm truncate mt-1">
                {topThree[2].name}
              </p>
              <p className="text-amber-600 font-bold text-[10px]">
                {topThree[2].amount}
              </p>
            </div>
          </div>
        </div>

        {/* List 4-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-12 text-left">
          {others.map((user) => (
            <div
              key={user.rank}
              className="flex items-center justify-between bg-white/5 border border-white/10 px-5 py-3 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <span className="text-slate-500 font-black text-sm w-6">
                  #{user.rank}
                </span>
                <span className="text-slate-200 font-minecraft text-xs md:text-sm">
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

      {/* ================= PHẦN PHẢI: BẢNG QUÀ TẶNG (Nhỏ gọn) ================= */}
      {/* Dùng h-fit để nó không bị kéo dài ra, w-[320px] để cố định độ rộng */}
      <div className="w-full lg:w-[320px] shrink-0 bg-[#161824]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl h-fit">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🎁</span>
          <h2 className="text-white text-lg font-bold tracking-wide uppercase">
            Quà tặng tri ân
          </h2>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
          Vật phẩm nhận được là quà tặng tri ân dành cho sếp đã ủng hộ duy trì
          server.
        </p>

        <div className="flex flex-wrap gap-2">
          {["PREFIX VIP", "ITEMS KIT", "COSMETICS"].map((item) => (
            <button
              key={item}
              className="px-3 py-1.5 rounded-full border border-cyan-600/50 text-cyan-400 text-[10px] font-bold bg-cyan-900/20 hover:bg-cyan-600/30 hover:border-cyan-400 transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
