/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,stories}",
  ],
  theme: {
    //カラーを定義
    colors: {
      "m3-sys-light-on-primary" : "#FFFFFF",
      "m3-sys-light-primary" : "#6750A4",
      "m3-sys-light-outline" : "#79747E",
    },
    //shadowを定義
    boxShadow:{
      "m3-state-layers-light-on-primary-opacity-0.08" : "rgba(255, 255, 255, 0.08)",
    },
    //borderを定義
    borderWidth:{
      1 : "1px",
    },
    extend: {},
  },
  plugins: [],
}

