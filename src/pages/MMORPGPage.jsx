import React from "react";

export default function MMORPGPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 px-4 md:px-8 pb-12 relative overflow-hidden">
      {/* Thematic background gradient */}
      <div className="fixed inset-0 -z-20 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)",
          }}
        ></div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="bg-particle"
          style={{ left: "12%", top: "22%", animationDelay: "0.3s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "22%", top: "42%", animationDelay: "1.3s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "32%", top: "62%", animationDelay: "2.3s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "68%", top: "32%", animationDelay: "3.3s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "78%", top: "52%", animationDelay: "4.3s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "88%", top: "72%", animationDelay: "5.3s" }}
        ></div>
      </div>

      {/* Header section */}
      <div className="max-w-7xl mx-auto mb-8 pl-2">
        <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest font-mono">
          CHẾ ĐỘ MMORPG
        </h1>
        <div className="h-1 w-24 bg-purple-500 mt-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
      </div>

      {/* Main container with textured background */}
      <div className="max-w-7xl mx-auto bg-neutral-900 border border-slate-800 rounded-2xl neon-border-cyan min-h-[50vh] flex flex-col relative overflow-hidden texture-overlay">
        <div className="p-8 md:p-12 flex-1 flex flex-col relative z-10">
          {/* Top row: Tags */}
          <div className="flex justify-end gap-3 mb-8">
            <span className="status-tag bg-red-500/10 text-red-500 border border-red-500/20 text-xs px-3 py-1.5 rounded font-mono">
              🔴 OFFLINE
            </span>
            <span className="text-cyan-400 font-mono text-sm flex items-center px-2">
              1.20.1 - 1.21.x
            </span>
          </div>

          {/* Middle row: Title & Desc */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6 minecraft-title-shadow text-purple-400 [text-shadow:4px_4px_0px_#000000]">
              MYSTHAVEN MMORPG
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Khám phá thế giới rộng lớn, hoàn thành nhiệm vụ và chiến đấu với
              quái vật để trở thành anh hùng huyền thoại.
            </p>
          </div>

          {/* Bottom row: Players Footer */}
          <div className="mt-auto pt-6 card-footer-bar flex justify-between items-center px-6 py-4 -mx-8 md:-mx-12 -mb-8 md:-mb-12 rounded-b-2xl">
            <span className="text-slate-500 font-mono tracking-wider">
              PLAYERS
            </span>
            <span className="text-cyan-400 font-mono font-bold text-lg">
              0 Online
            </span>
          </div>
        </div>
      </div>

      {/* Lore Box */}
      <div className="max-w-4xl mx-auto mt-12 p-8 bg-black/40 border-y border-white/5">
        <p className="text-center italic text-slate-400 text-lg leading-relaxed font-sans">
          "Trong bóng tối của Mysthaven, những thế lực cổ đại đang trỗi dậy. Hãy
          rèn luyện bản thân, triệu hồi sức mạnh huyền bí và viết nên thiên anh
          hùng ca bất diệt của bạn..."
        </p>
      </div>

      {/* Zig-Zag Feature Sections */}
      <section className="mt-24 space-y-24 max-w-6xl mx-auto px-4">
        {/* Feature 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              🗡️
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-purple-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              NHIỆM VỤ
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Hàng trăm nhiệm vụ đang chờ đợi bạn. Từ những cuộc phiêu lưu đơn
              giản đến những thử thách đầy cam go, mỗi nhiệm vụ đều mang lại
              phần thưởng xứng đáng.
            </p>
          </div>
        </div>

        {/* Feature 2: Image Right, Text Left */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              🐉
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-purple-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              BOSS THẾ GIỚI
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Đối mặt với những con trùm khổng lồ đầy uy lực. Tập hợp đội hình,
              phối hợp chiến thuật và hạ gục chúng để nhận lấy những trang bị
              huyền thoại quý giá.
            </p>
          </div>
        </div>

        {/* Feature 3: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              🛡️
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-purple-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              PVP ARENA
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tham gia đấu trường PvP đầy kịch tính. Chứng minh kỹ năng chiến
              đấu của bạn, leo rank và trở thành nhà vô địch được mọi người kính
              nể.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <div className="mt-32 mb-16 flex justify-center">
        <button className="group relative px-12 py-6 bg-slate-900 border-2 border-purple-500 rounded-xl text-2xl font-bold font-mono text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-pulse">
          CLICK ĐỂ COPY IP: PLAY.ASTRALISMC.XYZ
        </button>
      </div>
    </div>
  );
}
