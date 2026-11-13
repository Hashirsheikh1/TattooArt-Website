/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { ink: "#11110f", paper: "#e9e5dc", muted: "#a6a198", line: "rgba(233,229,220,.14)", accent: "#c7a77a" },
    fontFamily: { sans: ["DM Sans", "sans-serif"], display: ["Playfair Display", "serif"] }
  }},
  plugins: []
}