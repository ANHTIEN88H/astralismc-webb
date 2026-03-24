import React from "react";

export default function SurvivalPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 px-4 md:px-8 pb-12 relative overflow-hidden">
      {/* Thematic background gradient */}
      <div className="fixed inset-0 -z-20 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-radial from-emerald-900/50 via-transparent to-transparent"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)",
          }}
        ></div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="bg-particle"
          style={{ left: "10%", top: "20%", animationDelay: "0s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "20%", top: "40%", animationDelay: "1s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "30%", top: "60%", animationDelay: "2s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "70%", top: "30%", animationDelay: "3s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "80%", top: "50%", animationDelay: "4s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "90%", top: "70%", animationDelay: "5s" }}
        ></div>
      </div>

      {/* Header section */}
      <div className="max-w-7xl mx-auto mb-8 pl-2">
        <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest font-mono">
          CHẾ ĐỘ SINH TỒN
        </h1>
        <div className="h-1 w-24 bg-emerald-500 mt-2 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6 minecraft-title-shadow text-emerald-400 [text-shadow:4px_4px_0px_#000000]">
              ISOLDE SMP
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Sinh tồn thuần túy, xây dựng vương quốc và giao thương cùng người
              chơi khác. Khám phá thế giới rộng lớn ngay hôm nay.
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
          "Nơi những đế chế trỗi dậy từ tro tàn. Hãy khai hoang mảnh đất của
          bạn, xây dựng những lâu đài hùng vĩ và viết nên lịch sử của riêng
          mình. Mỗi viên đá bạn đặt, mỗi cánh đồng bạn gieo hạt đều là một
          chương mới trong câu chuyện bất tử của Isolde..."
        </p>
      </div>

      {/* Zig-Zag Feature Sections */}
      <section className="mt-24 space-y-24 max-w-6xl mx-auto px-4">
        {/* Feature 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              🏰
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-emerald-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              CLAIM ĐẤT
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Bảo vệ vùng đất của bạn khỏi những kẻ xâm lược. Hệ thống Claim đất
              tiên tiến giúp bạn yên tâm xây dựng và phát triển đế chế mà không
              lo bị phá hoại.
            </p>
          </div>
        </div>

        {/* Feature 2: Image Right, Text Left */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              💰
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-emerald-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              KINH TẾ
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Xây dựng đế chế kinh tế của riêng bạn. Giao thương với người chơi
              khác, tạo shop buôn bán và tích lũy tài sản để trở thành tỷ phú
              giàu có nhất server.
            </p>
          </div>
        </div>

        {/* Feature 3: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              ⚔️
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-emerald-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              CHIẾN ĐẤU
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tham gia những trận chiến PvP kịch tính. Bảo vệ lãnh thổ của bạn,
              liên minh với các bang hội khác và chứng minh sức mạnh của bạn
              trên chiến trường.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <div className="mt-32 mb-16 flex justify-center">
        <button className="group relative px-12 py-6 bg-slate-900 border-2 border-emerald-500 rounded-xl text-2xl font-bold font-mono text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-pulse">
          CLICK ĐỂ COPY IP: PLAY.ASTRALISMC.XYZ
        </button>
      </div>
    </div>
  );
}
