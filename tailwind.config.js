/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff",
        "base-200": "#f8f9fd",
        "base-300": "#dfe5eb",
        "base-content": "#30313d",
        "base-content-secondary": "#5c5b61",
        primary: "rgb(139 92 246)",
        "primary-content": "#ffffff",
        secondary: "rgb(167 139 250)",
        "secondary-content": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(139 92 246)",
          "primary-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8f9fd",
          "base-300": "#dfe5eb",
        },
      },
    ],
  },
};
