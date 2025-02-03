/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        twilight: {
          50: "#DBE7FF",
          100: "#BDD2FF",
          200: "#7AA4FF",
          300: "#3877FF",
          400: "#004EF5",
          500: "#0037B0",
          600: "#002D8F",
          700: "#00226B",
          800: "#001747",
          900: "#000B24",
          950: "#00050F",
        },
      },
    },
  },
  plugins: [],
}
