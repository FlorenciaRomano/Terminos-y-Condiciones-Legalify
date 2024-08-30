const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // montserrat: ['"Montserrat"', "sans-serif"],
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Configure your color palette here
        legalify: {
          primary: "#0A3F73",
          secondary: "#E5E6E7",
          tertiary: "#5C5C5C",
          grey: "#5D6970",
          blue: "#091133",
          border: "#DEDEDE",
        },
      },
    },
  },
  plugins: [],
};
