/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    //"./.storybook/**/*.{js,ts,jsx,tsx,stories,html}",
    "./src/**/*.{js,ts,jsx,tsx,stories}",

  ],
  theme: {
    colors: {
      "m3-sys-light-on-primary" : "#FFFFFF",
      "m3-sys-light-primary" : "#6750A4",
      "m3-sys-light-outline" : "#79747E",
    },
    boxShadow:{
      "m3-state-layers-light-on-primary-opacity-0.08" : "rgba(255, 255, 255, 0.08)",
    },
    borderWidth:{
      1 : "1px",
    },
    extend: {},
  },
  plugins: [],
}

