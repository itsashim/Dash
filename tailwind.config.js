module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      pinkWhite: "#EDEDFF",
      darkPink: "#DFE0F8",
      black: "#0C0B0D",
      lightGreen: "#E0FEDB",
      lightBlue: "#D7E2FE",
      lightYellow: "#FCEFCE",
      lightRed: "#FFE0E0",
      "gray500":"#6b7280"
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
    },
    container: {
      center: true,
    },

    extend: {
      spacing: {
        "70%": "70%",
        "30%": "30%",
        "95%": "95%",
        "20%": "20%",
      },
      boxShadow: {
        "card": "5px 5px 10px rgba(0, 0, 0, 0.25)",
      },
    
    },
  },
  darkMode: "class",

  plugins: [],
};
