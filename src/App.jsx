import { useState } from "react";
import "./styles/index.css";
import ParticlesBackground from "./components/Background/ParticlesBackground";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import GameModes from "./components/GameModes";
import Features from "./components/Features";
import Store from "./components/Store";
import Rules from "./components/Rules";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Toast from "./components/Toast";

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

  return (
    <div className="min-h-screen bg-mcBg text-slate-100">
      <ParticlesBackground />
      <Header onPlayClick={() => handleCopyIp("astralismc.xyz")} />
      <main>
        <Hero onCopyIp={handleCopyIp} onJoinDiscord={handleJoinDiscord} />
        <ServerInfo onCopyIp={handleCopyIp} />
        <GameModes />
        <Features />
        <Store />
        <Rules />
        <Gallery />
        <Contact onToast={showToast} />
      </main>
      <Footer />
      <Toast message={toast} />
    </div>
  );
}
