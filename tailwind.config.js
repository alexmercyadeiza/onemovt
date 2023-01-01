module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['"Cabinet Grotesk"'],
        sans: ["Figtree"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require('daisyui')],

  daisyui: {
    themes: false,
  }
};
