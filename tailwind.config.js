/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
      },
      gap: {
        '4': '2rem',
      }

    },
  },
  plugins: [],
}

