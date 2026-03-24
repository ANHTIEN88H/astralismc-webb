import { useMemo } from "react";
import ServerStatus from "./ServerStatus";
import OnlinePlayers from "./OnlinePlayers";

export default function Dashboard({ children }) {
  // Generate floating block configurations
  const floatingBlocks = useMemo(() => {
    const BLOCK_COUNT = 16;
    const blocks = [];

    for (let i = 0; i < BLOCK_COUNT; i++) {
      const size = Math.floor(18 + Math.random() * 34);
      const left = Math.random() * 100;
      const dur = 18 + Math.random() * 18;
      const delay = -(Math.random() * dur);
      const scale = (0.65 + Math.random() * 0.85).toFixed(2);
      const op = (0.08 + Math.random() * 0.22).toFixed(2);

      blocks.push({
        id: i,
        size,
        left,
        dur,
        delay,
        scale,
        op,
        bottom: -10 - Math.random() * 30,
      });
    }

    return blocks;
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#05060d] via-[#060912] to-[#05060d]">
      {/* Overlay noise & subtle vignette */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(236,72,153,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_32%)]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated floating blocks layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {floatingBlocks.map((block) => (
          <div
            key={block.id}
            className="block-floating"
            style={{
              "--s": `${block.size}px`,
              "--dur": `${block.dur}s`,
              "--scale": block.scale,
              "--op": block.op,
              left: `${block.left}%`,
              bottom: `${block.bottom}vh`,
              animationDelay: `${block.delay}s`,
            }}
            aria-hidden="true"
          ></div>
        ))}
      </div>

      {/* Content container - all children render here with z-index 2 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {children || <ServerStatus />}
      </div>
    </div>
  );
}
