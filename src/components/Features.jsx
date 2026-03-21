import { motion } from "framer-motion";

const features = [
  {
    title: "Anti‑Cheat & Security",
    text: "Heuristic anti‑cheat, IP protection & log system giúp server an toàn.",
    icon: "🛡",
  },
  {
    title: "Balanced Economy",
    text: "Shop, auction, jobs, chợ đen – tất cả được cân bằng kỹ.",
    icon: "💰",
  },
  {
    title: "Custom Items",
    text: "Vũ khí & vật phẩm custom với chỉ số và hiệu ứng đặc biệt.",
    icon: "⚔",
  },
  {
    title: "Weekly Events",
    text: "Sự kiện PvP, build, parkour với phần thưởng hiếm.",
    icon: "🎉",
  },
];

export default function Features() {
  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="section-title text-cyan-200 minecraft-title-shadow">
          FEATURES
        </h2>
        <p className="mt-2 text-sm text-gray-300 md:text-base">
          Hệ thống được thiết kế cho cảm giác chơi lâu dài, mượt và công bằng.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="panel flex flex-col gap-4 p-6 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20 text-3xl flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="game-mode-title text-lg text-cyan-100 mb-2">
                  {f.title}
                </h3>
                <p className="game-mode-description text-sm md:text-base text-slate-300 leading-relaxed">
                  {f.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
