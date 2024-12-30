/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgWhite: "var(--BgWhite)",
        GradBackground01: "var(--GradientBG1)",
        GradBackground02: "var(--GradientBG2)",
        paragraphText: "var(--paragraph)",
        headingText: "var(--headings)",
        button: "var(--button)",
        buttonText: "var(--buttonText)",
        buttonTextHover: "var(--buttonTextHover)",
        whiteText: "var(--whiteText)",
        socialIcons: "var(--socialIcons)",
      },
      fontFamily: {
        Jakatra: ['"Plus Jakarta Sans"', "serif"],
      },
      boxShadow: {
        icons: "0px 0px 12px 3px rgba(36,16,75,0.3)",
      },
      backgroundImage: {
        "hexa-pattern": "url('/BG hexa pattern.png')",
        "footer-texture": "url('/BG texture pattern.png')",
      },
    },
  },
  plugins: [],
};
