/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-photo": "url('/src/img/cover-photo.jpg')",
      },
    },
  },
  plugins: [],
};
