import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Component con để hiển thị từng cụm máy chủ
const ServerCluster = ({ name, description, ip, version, icon }) => {
  const [data, setData] = useState({ online: 0, status: "loading" });

  // Tự động lấy số người online từ API
  useEffect(() => {
    fetch(`https://api.mcstatus.io/v2/status/java/${ip}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.online) {
          setData({ online: json.players.online, status: "online" });
        } else {
          setData({ online: 0, status: "offline" });
        }
      })
      .catch(() => setData({ online: 0, status: "error" }));
  }, [ip]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="panel p-6 flex flex-col justify-between space-y-4 border border-white/5 bg-black/20 backdrop-blur-md rounded-xl"
    >
      <div className="flex justify-between items-start">
        <div className="text-3xl">{icon}</div>
        <div className="flex flex-col items-end">
          <span
            className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${data.status === "online" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
          >
            {data.status === "online" ? "● Live" : "○ Offline"}
          </span>
          <span className="text-cyan-300 text-xs font-mono mt-1">
            {version}
          </span>
        </div>
      </div>

      <div>
        <h3 className="pixel-title text-xl text-white mb-2 uppercase tracking-wide">
          {name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">
          Players
        </span>
        <span className="text-cyan-400 font-bold font-mono">
          {data.online} Online
        </span>
      </div>
    </motion.div>
  );
};

export default function GameModes() {
  const clusters = [
    {
      name: "Mysthaven MMORPG",
      description:
        "Khám phá thế giới ma thuật, làm nhiệm vụ cốt truyện, săn boss và thăng cấp kỹ năng độc đáo.",
      ip: "mysthaven.astralismc.xyz", // Sếp thay IP thật của cụm này vào
      version: "1.20.1 - 1.21.x",
      icon: "🧙‍♂️",
    },
    {
      name: "Isolde SMP",
      description:
        "Sinh tồn cộng đồng thuần túy, xây dựng vương quốc và giao thương cùng người chơi khác.",
      ip: "isolde.astralismc.xyz", // Sếp thay IP thật của cụm này vào
      version: "1.21+",
      icon: "🛡️",
    },
    {
      name: "Celestara Skyblock",
      description:
        "Hòn đảo trên không trung, nâng cấp máy móc Slimefun và chinh phục bảng xếp hạng đảo.",
      ip: "celestara.astralismc.xyz", // Sếp thay IP thật của cụm này vào
      version: "1.20.x",
      icon: "☁️",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="pixel-title text-4xl text-cyan-200 minecraft-text-shadow">
          SERVER NETWORK
        </h2>
        <p className="text-slate-400">
          Chọn vùng đất của bạn và bắt đầu cuộc hành trình.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clusters.map((cluster, index) => (
          <ServerCluster key={index} {...cluster} />
        ))}
      </div>
    </div>
  );
}
