import { motion } from "framer-motion";

const images = [
  { label: "Spawn Hub", src: "/assets/spawn-hub.png" },
  { label: "Skyblock Islands", src: "/assets/skyblock-islands.png" },
  { label: "PvP Arena", src: "/assets/pvp-arena.png" },
  { label: "Event Lobby", src: "/assets/event-lobby.png" },
];

export default function Gallery() {
  return (
    <section className="bg-mcBg">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="pixel-title text-sm text-[#ADD8E6]">GALLERY</h2>
        <p className="mt-1 text-xs text-slate-300 md:text-sm">
          Một vài góc nhìn trong server (placeholder, thay bằng screenshot sau).
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-video overflow-hidden rounded-xl border border-slate-700/80 bg-transparent"
            >
              <img
                src={img.src}
                alt={img.label}
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative flex h-full items-end p-3">
                <span className="pixel-title text-[9px] text-[#ADD8E6] drop-shadow">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
