module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        /* Pixel Art - Tiêu đề lớn */
        pixel: ['"Press Start 2P"', '"VT323"', "monospace"],

        /* Minecraft Heading - Vừa phải (Card titles, subtitles) */
        minecraft: ['"VT323"', '"Courier New"', "monospace"],

        /* Monospace - Nội dung kỹ thuật (IPs, versions) */
        mono: ['"JetBrains Mono"', '"Courier New"', "monospace"],

        /* Sans - Body text (Mô tả, nội dung phụ) */
        sans: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      colors: {
        mcBg: "#bb91bf",
        mcPanel: "rgba(212, 87, 200, 0.96)",
        mcAccent: "#a5b4fc",
        mcAccent2: "#7dd3fc",
        mcAccent3: "#f9a8d4",
      },
      boxShadow: {
        glow: "0 0 35px rgba(244,114,182,0.6)", // hồng pastel glow
        glowSoft: "0 0 22px rgba(129,140,248,0.5)",
      },
      backgroundImage: {
        "mc-gradient":
          "linear-gradient(145deg, #f9a8d4 0%, #77b6cb 40%, #f9a8d4 75%, #7ac7d5 100%)",
      },
    },
  },
  plugins: [],
};
