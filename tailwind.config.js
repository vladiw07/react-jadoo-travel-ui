module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft-xl': '0px 40px 50px rgba(0, 0, 0, 0.05)', // soft and subtle
      },
    },
  },
  plugins: [],
}