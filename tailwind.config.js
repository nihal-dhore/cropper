/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#37393F",
        secondary: "#45474E"
      },
    },
  },
  plugins: [],
};
