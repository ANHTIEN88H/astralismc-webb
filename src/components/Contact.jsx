import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // Sếp thay link Discord thật của server vào đây
  const discordLink = "https://discord.gg/rzBWcVMp";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* KHU VỰC TIÊU ĐỀ: ĐÃ ĐƯỢC FIX LỖI FONT VÀ UI */}
      <div className="text-center space-y-4 mb-10">
        {/* FIX LỖI 1: Tiêu đề bị hư form/vỡ chữ Tiếng Việt */}
        {/* Đổi từ pixel-title sang font-black (hoặc font-extrabold) để hiển thị mượt mà dấu Tiếng Việt */}
        <h2 className="text-4xl md:text-5xl font-black text-cyan-100 minecraft-text-shadow uppercase tracking-wide">
          TRUNG TÂM HỖ TRỢ
        </h2>

        {/* FIX LỖI 2: Câu mô tả chữ tối khó thấy */}
        {/* Đổi từ text-slate-400 sang text-cyan-100 để chữ nổi bần bật trên nền tối mờ */}
        <p className="text-cyan-100 text-sm md:text-base px-4 max-w-xl mx-auto leading-relaxed">
          Đội ngũ Admin AstralisMC luôn sẵn sàng hỗ trợ bạn qua Discord.
        </p>
      </div>

      {/* BOX HƯỚNG DẪN (GIỮ NGUYÊN) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="panel border-4 border-[#3c3c3c] bg-[#161618]/90 rounded-xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* ... (phần code box hướng dẫn giữ nguyên) ... */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#5865F2]/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-600/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* BƯỚC 1: VÀO DISCORD */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-5 rounded-lg bg-black/40 border border-white/5">
            <div className="flex-shrink-0 w-16 h-16 bg-[#5865F2]/20 border-2 border-[#5865F2] rounded-xl flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(88,101,242,0.4)]">
              💬
            </div>
            <div className="flex-grow space-y-2">
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Bước 1: Tham gia Discord
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Mọi yêu cầu hỗ trợ, báo cáo lỗi (bug), hay thắc mắc nạp thẻ đều
                được giải quyết nhanh nhất thông qua Server Discord chính thức.
              </p>
            </div>
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded shadow-lg transition-transform active:scale-95 whitespace-nowrap"
            >
              Vào Discord Ngay
            </a>
          </div>

          {/* BƯỚC 2: TẠO TICKET */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-5 rounded-lg bg-black/40 border border-white/5">
            <div className="flex-shrink-0 w-16 h-16 bg-cyan-500/20 border-2 border-cyan-500 rounded-xl flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              🎫
            </div>
            <div className="flex-grow space-y-2">
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Bước 2: Tạo Ticket Hỗ Trợ
              </h3>
              <ul className="text-slate-300 text-sm leading-relaxed list-disc list-inside space-y-1">
                <li>
                  Tìm đến kênh{" "}
                  <span className="text-cyan-300 font-mono bg-cyan-900/30 px-2 py-0.5 rounded">
                    #📩・ticket
                  </span>
                  .
                </li>
                <li>
                  Bấm vào nút <strong>"Tạo Ticket"</strong> ở trong kênh đó.
                </li>
                <li>
                  Trình bày rõ vấn đề (kèm ảnh nếu có) và chờ Admin xử lý nhé!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
