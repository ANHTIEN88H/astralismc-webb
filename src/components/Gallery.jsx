import { motion } from "framer-motion";

const images = [
  { label: "Spawn Hub", src: "/assets/spawn-sv.png" },
  { label: "Skyblock Islands", src: "/assets/skyblock-islands.png" },
  { label: "PvP Arena", src: "/assets/pvp-arena.png" },
  { label: "Event Lobby", src: "/assets/event-lobby.png" },
];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="section-title text-cyan-200 minecraft-title-shadow">
          GALLERY
        </h2>
        <p className="mt-3 text-base text-gray-300 md:text-lg">
          Một vài góc nhìn trong server (placeholder, thay bằng screenshot sau).
        </p>

        {/* Unified Gallery Grid - All images same size */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-video overflow-hidden rounded-xl border border-cyan-500/40 bg-black/50 backdrop-blur-sm hover:border-cyan-400/70 transition-colors"
            >
              <img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end p-4">
                <span className="pixel-title text-sm md:text-base text-cyan-200 drop-shadow-lg minecraft-title-shadow">
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
