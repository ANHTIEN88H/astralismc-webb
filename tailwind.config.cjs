module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "system-ui"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
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
