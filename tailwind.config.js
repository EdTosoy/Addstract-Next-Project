module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/images/BG.png')",
      }),
      colors: {
        grayBlue: "#6B8CAE",
        darkBlue: "#0075C5"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
