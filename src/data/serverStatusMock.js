// Fake API: mô phỏng fetch trạng thái server
export function fetchServerStatus() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const online = true;
      const playersOnline = Math.floor(Math.random() * 60) + 10;
      resolve({
        online,
        playersOnline,
        maxPlayers: 200,
        motd: "AstralisMC • Survival • Skyblock • Mmorpg",
        version: "1.21.x Java & Bedrock",
        latency: Math.floor(Math.random() * 80) + 20,
      });
    }, 800);
  });
}
