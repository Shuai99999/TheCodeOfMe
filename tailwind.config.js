// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // 深背景色
        foreground: "#ffffff", // 亮文字色
        accent: "#0ea5e9", // 浅蓝高亮（可选）
        "accent-foreground": "#000000", // 高亮时文字（可选）
      },
      borderRadius: {
        lg: "1rem",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        cyber: ['"Orbitron"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
