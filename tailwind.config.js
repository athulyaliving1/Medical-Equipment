module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          'custom-sky':'#EF4781',
        }
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};