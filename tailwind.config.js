/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", lg: "2rem" } },
    extend: {
      maxWidth: { content: "72rem" }, /* ~1152px */
      fontFamily: {
        serif: ['"Libre Baskerville"', "serif"],
        sans: ['"Nunito Sans"', "system-ui", "sans-serif"]
      },
      letterSpacing: { tight2: "-0.02em" }
    },
  },
  plugins: [],
};