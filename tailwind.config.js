module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/images/BG.png')",
        backgroundDark: "url('/images/BGDark.png')",
      }),
      colors: {
        grayBlue: "#6B8CAE",
        darkBlue: "#0075C5",
        DarkModeBlue: "#102131"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
