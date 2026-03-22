import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import "./font-minecraft-overhaul.css";
import Dashboard from "./components/MinecraftDashboard/Dashboard";
import ParticlesBackground from "./components/Background/ParticlesBackground";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import GameModes from "./components/GameModes";
import Store from "./components/Store";
import Rules from "./components/Rules";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Toast from "./components/Toast";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  const [toast, setToast] = useState("");
  const [audio] = useState(() => {
    const a = new Audio(
      "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",
    );
    a.volume = 0.25;
    return a;
  });

  const showToast = (msg) => {
    setToast(msg);
    audio.currentTime = 0;
    audio.play().catch(() => {});
    setTimeout(() => setToast(""), 2400);
  };

  const handleCopyIp = async (ip) => {
    try {
      await navigator.clipboard.writeText(ip);
      showToast(`Đã copy IP: ${ip}`);
    } catch {
      showToast("Trình duyệt không cho phép copy tự động.");
    }
  };

  const handleJoinDiscord = () => {
    showToast("Đang mở Discord.");
    window.open("https://discord.gg/rzBWcVMp", "_blank", "noopener,noreferrer");
  };

  const PageWrapper = ({ children }) => (
    <div className="w-full pt-16 pb-20 px-4 md:px-8">{children}</div>
  );

  return (
    <Router>
      <Dashboard>
        <ParticlesBackground />
        <Header onPlayClick={() => handleCopyIp("astralismc.xyz")} />

        <main className="relative z-10 min-h-[80vh]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero
                    onCopyIp={handleCopyIp}
                    onJoinDiscord={handleJoinDiscord}
                  />

                  <div className="w-full pt-16 pb-20 px-4 md:px-8">
                    <ServerAchievements />
                  </div>

                  <Gallery />
                </>
              }
            />

            <Route
              path="/modes"
              element={
                <PageWrapper>
                  <GameModes />
                </PageWrapper>
              }
            />
            <Route
              path="/info"
              element={
                <PageWrapper>
                  <ServerInfo onCopyIp={handleCopyIp} />
                </PageWrapper>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <PageWrapper>
                  <Leaderboard />
                </PageWrapper>
              }
            />
            <Route
              path="/store"
              element={
                <PageWrapper>
                  <Store />
                </PageWrapper>
              }
            />
            <Route
              path="/rules"
              element={
                <PageWrapper>
                  <Rules />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact onToast={showToast} />
                </PageWrapper>
              }
            />
          </Routes>
        </main>

        <Footer />
        <Toast message={toast} />
      </Dashboard>
    </Router>
  );
}

const ServerAchievements = () => {
  const milestones = [
    {
      icon: "🗺️",
      title: "KHÁM PHÁ THẾ GIỚI",
      subtitle: "WORLD EXPLORER",
      description:
        "Tổng số vùng đất và phó bản độc nhất đã được cộng đồng mở khóa.",
      currentValue: 140,
      goalValue: 150,
      metricName: "ZONES",
      color: "text-purple-400",
    },
    {
      icon: "💰",
      title: "TRÙM KINH TẾ",
      subtitle: "ECONOMY TYCOON",
      description:
        "Tổng số tiền server đang lưu thông (Tỷ) trong nền kinh tế do người chơi vận hành.",
      currentValue: 1.2,
      goalValue: 2.0,
      metricName: "BILLION $",
      color: "text-yellow-400",
    },
    {
      icon: "🏆",
      title: "CHIẾN THẮNG SỰ KIỆN",
      subtitle: "EVENT ASCENSION",
      description:
        "Tổng số sự kiện cộng đồng đã được tổ chức và hoàn thành xuất sắc.",
      currentValue: 115,
      goalValue: 120,
      metricName: "EVENTS",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="w-full mx-auto max-w-6xl space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-black text-cyan-200 minecraft-text-shadow uppercase tracking-widest mt-12">
          THÀNH TỰU SERVER
        </h2>
        <p className="text-slate-300 text-sm uppercase font-bold tracking-wider">
          Những Cột Mốc Của Cộng Đồng AstralisMC
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="relative overflow-hidden p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
          >
            <div
              className={`absolute -bottom-10 -right-10 w-32 h-32 ${m.color.replace("text", "bg")} blur-3xl opacity-20 pointer-events-none`}
            />

            <div className="relative z-10">
              <div className="flex flex-col mb-6 space-y-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white/10 shadow-glowSoft border border-white/20 text-3xl">
                  {m.icon}
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold ${m.color} uppercase tracking-wide leading-tight`}
                  >
                    {m.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 uppercase font-mono tracking-widest mt-1">
                    {m.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-200 min-h-[50px] mb-8 leading-relaxed">
                {m.description}
              </p>
            </div>

            <div className="relative z-10 space-y-3 pt-5 border-t border-white/10">
              <div className="flex justify-between items-center text-xs text-slate-400 uppercase font-bold tracking-widest">
                <span>Tiến Trình</span>
                <span className={`${m.color} font-bold font-mono text-sm`}>
                  {Math.round((m.currentValue / m.goalValue) * 100)}%
                </span>
              </div>

              <div className="relative h-2.5 w-full bg-black/60 rounded-full overflow-hidden border border-white/5 shadow-inner">
                <div
                  className={`absolute top-0 left-0 bottom-0 ${m.color.replace("text", "bg")} rounded-full`}
                  style={{
                    width: `${(m.currentValue / m.goalValue) * 100}%`,
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3)",
                  }}
                />
              </div>

              <div className="flex justify-between text-cyan-300 font-bold font-mono text-xs pt-1">
                <span>
                  {m.currentValue.toLocaleString()}{" "}
                  <span className="text-slate-400 font-medium">
                    {m.metricName}
                  </span>
                </span>
                <span className="text-slate-400">
                  Mục tiêu: {m.goalValue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
