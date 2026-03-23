import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "⚔️", label: "Game Modes", path: "/modes" },
  { icon: "📊", label: "Server Info", path: "/info" },
  { icon: "🏆", label: "Vinh Danh", path: "/leaderboard" },
  { icon: "💰", label: "Donate - Store", path: "/store" },
  { icon: "📜", label: "Rules", path: "/rules" },
  { icon: "💬", label: "Contact", path: "/contact" },
];

export default function Header({ onPlayClick }) {
  const location = useLocation();
  const [onlineCount, setOnlineCount] = useState("...");

  // State mới để điều khiển việc đóng/mở menu trên điện thoại
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lấy số liệu Discord
  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch(
          "https://discord.com/api/guilds/1425439781026009110/widget.json",
        );
        const data = await response.json();
        if (data && data.presence_count !== undefined) {
          setOnlineCount(data.presence_count);
        } else {
          setOnlineCount("?");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu Discord:", error);
        setOnlineCount("?");
      }
    };

    fetchDiscordData();
    const interval = setInterval(fetchDiscordData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-6 py-1.5 bg-indigo-950/30 backdrop-blur-md border-b border-white/10 shadow-lg">
      {/* ── THANH CHÍNH (Chứa Logo, Nav Desktop và Nút Desktop) ── */}
      <div className="flex items-center justify-between w-full">
        {/* LOGO BÊN TRÁI */}
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)} // Bấm vào logo cũng tự đóng menu đt
          className="flex items-center gap-2.5 transition-transform duration-200 hover:scale-105 active:scale-95 z-50"
        >
          <img
            src="/assets/astralis-logo.png"
            alt="AstralisMC Logo"
            className="w-8 h-8 rounded-md object-cover shadow-[0_0_10px_rgba(6,182,212,0.4)] bg-black/20"
          />
          <div className="flex flex-col">
            <span
              className="text-white font-black tracking-widest"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                textShadow: "1px 1px 0 #000",
              }}
            >
              ASTRALIS<span className="text-cyan-400">MC</span>
            </span>
            <span className="text-[6.5px] text-slate-300 font-medium mt-0.5 uppercase tracking-wider">
              Survival • Skyblock • Mmorpg
            </span>
          </div>
        </Link>

        {/* MENU CHÍNH Ở GIỮA (Chỉ hiện trên PC: lg:flex) */}
        <nav className="hidden lg:flex items-center gap-4">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1 text-[11px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-90 ${
                  isActive
                    ? "text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                <span className="text-sm filter drop-shadow-md">
                  {item.icon}
                </span>
                <span className="tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CÁC NÚT BÊN PHẢI (PC) VÀ NÚT HAMBURGER (MOBILE) */}
        <div className="flex items-center gap-2.5">
          {/* Nhóm Nút này chỉ hiện trên màn hình lớn (hidden lg:flex) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* NÚT DISCORD SERVER */}
            <a
              href="https://discord.gg/rzBWcVMp"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#5865F2]/90 to-[#4752C4]/90 border border-[#5865F2]/50 hover:brightness-110 px-3 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-[0_0_12px_rgba(88,101,242,0.4)]"
            >
              <svg
                fill="white"
                viewBox="0 0 24 24"
                className="w-5 h-5 drop-shadow-md"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] text-white font-bold uppercase tracking-widest drop-shadow-md">
                  Discord
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_4px_#4ade80]"></span>
                  <span className="text-[8.5px] text-green-300 font-bold tracking-wider">
                    {onlineCount} ONLINE
                  </span>
                </div>
              </div>
            </a>

            {/* Nút Copy IP / Mic */}
            <button
              onClick={onPlayClick}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 border border-orange-400/50 hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 active:scale-90 text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]"
              title="Copy IP"
            >
              <span className="text-sm">🎤</span>
            </button>

            {/* Nút YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-700 border border-red-500/50 hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 active:scale-90 text-white shadow-[0_0_10px_rgba(255,0,0,0.4)]"
              title="YouTube"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 drop-shadow-md"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* NÚT HAMBURGER (3 GẠCH) DÀNH CHO ĐIỆN THOẠI (Chỉ hiện khi màn hình nhỏ: lg:hidden) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors z-50"
          >
            {isMobileMenuOpen ? (
              // Icon X khi menu đang mở
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icon 3 gạch khi menu đóng
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU DROP-DOWN (Chỉ hiện khi bấm nút 3 gạch trên ĐT) ── */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-indigo-950/95 backdrop-blur-xl border-b border-white/10 flex flex-col p-4 gap-4 lg:hidden shadow-2xl transition-all duration-300 origin-top animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)} // Bấm xong tự đóng
                  className={`flex items-center gap-3 p-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="tracking-wide uppercase">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="w-full h-[1px] bg-white/10 my-1"></div>

          {/* Các nút tương tác nhét chung vào Mobile Menu cho gọn */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                onPlayClick();
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 border border-orange-400/50 text-white font-bold uppercase tracking-widest text-xs"
            >
              <span className="text-base">🎤</span> Copy IP
            </button>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-700 border border-red-500/50 text-white"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <a
            href="https://discord.gg/rzBWcVMp"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#5865F2]/90 to-[#4752C4]/90 border border-[#5865F2]/50 text-white"
          >
            <span className="font-bold uppercase tracking-widest text-xs">
              Tham gia Discord
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full text-[10px] font-bold border border-green-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>{" "}
              {onlineCount}
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
