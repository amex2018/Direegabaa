module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 
  theme: {
    extend: {
      fontFamily:{
        roboto: "'Roboto', sans-serif",
        Stix: "'STIX Two Text', serif",

      },
      colors:{
        footer: "#f3f3f3",
        primary: "#fd3d57",
        secondary:"#2b2d42",
        textColor: "#2b2d42",
        bg_card: "#FBE3E4"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
