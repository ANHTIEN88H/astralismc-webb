import React from "react";

export default function SkyblockPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 px-4 md:px-8 pb-12 relative overflow-hidden">
      {/* Thematic background gradient */}
      <div className="fixed inset-0 -z-20 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)",
          }}
        ></div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="bg-particle"
          style={{ left: "15%", top: "25%", animationDelay: "0.5s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "25%", top: "45%", animationDelay: "1.5s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "35%", top: "65%", animationDelay: "2.5s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "65%", top: "35%", animationDelay: "3.5s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "75%", top: "55%", animationDelay: "4.5s" }}
        ></div>
        <div
          className="bg-particle"
          style={{ left: "85%", top: "75%", animationDelay: "5.5s" }}
        ></div>
      </div>

      {/* Header section */}
      <div className="max-w-7xl mx-auto mb-8 pl-2">
        <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest font-mono">
          CHẾ ĐỘ SKYBLOCK
        </h1>
        <div className="h-1 w-24 bg-blue-500 mt-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6 minecraft-title-shadow text-cyan-400 [text-shadow:4px_4px_0px_#000000]">
              CELESTARA SKYBLOCK
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Xây dựng hòn đảo trên không, phát triển kinh tế và cạnh tranh với
              người chơi khác để trở thành bá chủ bầu trời.
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
          "Giữa những tầng mây bồng bềnh, một thế giới mới đang chờ đợi. Hãy tạo
          dựng hòn đảo của riêng bạn từ hư vô, biến những đám mây thành lâu đài
          và viết nên truyền thuyết của Celestara..."
        </p>
      </div>

      {/* Zig-Zag Feature Sections */}
      <section className="mt-24 space-y-24 max-w-6xl mx-auto px-4">
        {/* Feature 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              🏝️
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-cyan-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              XÂY DỰNG ĐẢO
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tạo dựng hòn đảo thiên đường của riêng bạn giữa bầu trời. Sử dụng
              tài nguyên quý giá để mở rộng lãnh thổ và biến giấc mơ thành hiện
              thực.
            </p>
          </div>
        </div>

        {/* Feature 2: Image Right, Text Left */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              ⚡
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-cyan-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              NÂNG CẤP MÁY
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Hệ thống máy móc tự động hóa giúp bạn thu hoạch tài nguyên liên
              tục. Nâng cấp máy móc để tăng hiệu suất và thống trị nền kinh tế
              server.
            </p>
          </div>
        </div>

        {/* Feature 3: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
              🏆
            </span>
          </div>
          <div className="w-full md:w-1/2 space-y-4 px-8">
            <h3 className="text-2xl font-bold font-mono uppercase text-cyan-400 [text-shadow:3px_3px_0px_rgba(0,0,0,0.9)]">
              TRANH TÀI
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tham gia các cuộc thi xây dựng đảo và cạnh tranh với hàng trăm
              người chơi khác. Chứng minh bạn là kiến trúc sư tài ba nhất bầu
              trời Celestara.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <div className="mt-32 mb-16 flex justify-center">
        <button className="group relative px-12 py-6 bg-slate-900 border-2 border-cyan-500 rounded-xl text-2xl font-bold font-mono text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-pulse">
          CLICK ĐỂ COPY IP: PLAY.ASTRALISMC.XYZ
        </button>
      </div>
    </div>
  );
}
