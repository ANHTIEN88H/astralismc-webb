import { useState, useEffect } from "react";

export default function DiscordWidget() {
  const [onlineCount, setOnlineCount] = useState(0);

  const DISCORD_SERVER_ID = "1425439781026009110";

  useEffect(() => {
    fetch(`https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`)
      .then((res) => res.json())
      .then((data) => {
        if (data.presence_count !== undefined) {
          setOnlineCount(data.presence_count);
        }
      })
      .catch((err) => console.error("Error loading Discord Widget:", err));
  }, []);

  return (
    <div className="discord-mini-widget flex items-center gap-4 p-2 rounded-lg backdrop-blur-lg bg-black/30 border border-pink-500/50 shadow-glow transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 bg-[#5865F2] rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 127.14 96.36"
        >
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77.67,77.67,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.3,46,96.19,53,91.08,65.69,84.69,65.69Z" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-pixel text-pink-300 text-sm uppercase">
          Discord Server
        </span>
        <span className="text-[#4ade80] font-pixel text-lg mt-1 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse"></span>
          {onlineCount} ONLINE
        </span>
      </div>
    </div>
  );
}
