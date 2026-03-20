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
    <section className="bg-mcBg">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="pixel-title text-sm text-[#ADD8E6]">FEATURES</h2>
        <p className="mt-1 text-xs text-slate-300 md:text-sm">
          Hệ thống được thiết kế cho cảm giác chơi lâu dài, mượt và công bằng.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="panel flex flex-col items-start gap-2 p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900/80 text-lg">
                {f.icon}
              </div>
              <h3 className="text-xs font-semibold text-slate-100">
                {f.title}
              </h3>
              <p className="text-[11px] text-slate-300">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
