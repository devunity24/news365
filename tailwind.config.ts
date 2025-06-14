
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "Roboto", "ui-sans-serif", "system-ui"],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        charcoal: {
          500: "#36454F",
        },
        red: {
          600: "#E53935",
        },
        indigo: {
          700: "#3F51B5",
        },
        "dark-gray": "#263238",
        "malayalam": "#E53935",       // red
        "kannada": "#3F51B5",         // indigo
        "tamil": "#607D8B",           // blue-gray
        "telugu": "#43A047",          // green
        "hindi": "#F9A825",           // yellow
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        card: "0 2px 8px rgba(43,52,69,0.08)",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
