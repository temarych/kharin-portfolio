/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        circularProgressStroke: {
          "0%"  : { strokeDasharray: "1px 200px", strokeDashoffset: "0" },
          "50%" : { strokeDasharray: "100px 200px", strokeDashoffset: "-15px" },
          "100%": { strokeDasharray: "100px 200px", strokeDashoffset: "-125px" }
        },
        circularProgressSpin: {
          "0%"  : { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        circularProgressStroke: "circularProgressStroke 1.5s infinite",
        circularProgressSpin  : "circularProgressSpin 1.5s linear infinite"
      }
    },
  },
  plugins: [],
}
