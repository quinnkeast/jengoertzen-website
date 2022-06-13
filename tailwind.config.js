module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Helvetica",
      serif: "CooperBT",
    },
    extend: {
      colors: {
        rose: {
          DEFAULT: "#fcedea",
        },
        tan: {
          DEFAULT: "#f9f0e0",
        },
        black: {
          DEFAULT: "#381917",
          lighter: "#967876",
        },
        yellow: {
          DEFAULT: "#F4AE23",
        },
      },
      maxHeight: {
        "75vh": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
