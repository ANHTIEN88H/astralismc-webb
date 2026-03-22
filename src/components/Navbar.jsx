import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Danh sách các menu
  const navItems = [
    { name: "Trang Chủ", path: "/" },
    { name: "Vinh Danh", path: "/leaderboard" },
    { name: "Cửa Hàng", path: "/store" },
    { name: "Luật Lệ", path: "/rules" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO BÊN TRÁI */}
        <Link to="/" className="flex items-center gap-3">
          {/* Chỗ này sếp thay link ảnh logo thật của AstralisMC vào nhé */}
          <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center font-bold text-white">
            AMC
          </div>
          <div>
            <h1 className="text-white font-black text-xl tracking-wider">
              ASTRALIS<span className="text-cyan-400">MC</span>
            </h1>
            <p className="text-slate-400 text-xs">Survival • MMORPG</p>
          </div>
        </Link>

        {/* MENU Ở GIỮA */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                location.pathname === item.path
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* NÚT IP BÊN PHẢI (Giống Wynncraft) */}
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase px-6 py-2.5 rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          Play Now
        </button>
      </div>
    </nav>
  );
}
