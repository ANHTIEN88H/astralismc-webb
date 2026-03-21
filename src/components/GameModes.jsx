import { motion } from "framer-motion";

const modes = [
  {
    name: "Survival RPG",
    desc: "Sinh tồn cổ điển, nhiệm vụ hằng ngày, boss, dungeon & economy.",
    color: "from-emerald-500/40 to-lime-400/20",
  },
  {
    name: "Skyblock Realms",
    desc: "Hòn đảo trên trời, island upgrade, generators & custom enchants.",
    color: "from-cyan-400/40 to-emerald-500/20",
  },
  {
    name: "Crystal PvP",
    desc: "PvP tốc độ cao, kit custom, ranked ladder & cosmetic particles.",
    color: "from-violet-500/40 to-fuchsia-500/20",
  },
  {
    name: "Events & Minigames",
    desc: "BedWars, Spleef, parkour event mỗi tuần với nhiều phần thưởng.",
    color: "from-amber-400/40 to-rose-500/20",
  },
];

export default function GameModes() {
  return (
    <section id="modes">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="section-title text-cyan-200 minecraft-title-shadow">
          GAME MODES
        </h2>
        <p className="mt-2 text-sm text-gray-300 md:text-base">
          Nhiều chế độ chơi để bạn không bao giờ chán.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {modes.map((mode, idx) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="panel relative overflow-hidden p-5 hover:border-cyan-400/50 transition-colors"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${mode.color} opacity-15`}
              />
              <div className="relative space-y-2">
                <h3 className="game-mode-title text-lg text-cyan-100">
                  {mode.name}
                </h3>
                <p className="game-mode-description text-sm text-slate-300 leading-relaxed">
                  {mode.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
