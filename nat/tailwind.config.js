/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       fontFamily: {
        // Custom fonts (if you add them)
        heading: ['Poppins-Bold'],
        body: ['Roboto-Regular'],
      },
        fontSize: {
         xs: [10, { lineHeight: 1.5, letterSpacing: -0.011 }],
         sm: [12, { lineHeight: 1.5, letterSpacing: -0.011 }],
         base: [14, { lineHeight: 1.5, letterSpacing: -0.011 }],
         md: [16, { lineHeight: 1.5, letterSpacing: -0.011 }],
         lg: [18, { lineHeight: 1.5, letterSpacing: -0.011 }],
         '2xl': [20, { lineHeight: 1.5, letterSpacing: -0.011 }],
         '3xl': [22, { lineHeight: 1.5, letterSpacing: -0.011 }],
         '4xl': [24, { lineHeight: 1.5, letterSpacing: -0.011 }],
      },
    },
  },
  plugins: [],
}
