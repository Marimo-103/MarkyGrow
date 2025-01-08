/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        BgWhite: "var(--BgWhite)",
        BgDark: "var(--BackgroundDark)",
        GradBackground01: "var(--GradientBG1)",
        GradBackground01Dark: "var(--GradientBG1Dark)",
        GradBackground02: "var(--GradientBG2)",
        GradBackground02Dark: "var(--GradientBG2Dark)",
        paragraphText: "var(--paragraph)",
        paragraphTextDark: "var(--paragraphDark)",
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
        iconsDark: "0px 0px 12px 3px rgba(65, 222, 243, 0.4)",
        serviceBox: "0px 0px 39px 16px rgba(36,16,75,0.3)",
        serviceBoxDark: "0px 0px 39px 16px rgba(65, 222, 243, 0.4)",
      },
      backgroundImage: {
        "hexa-pattern": "url('/BG hexa pattern.png')",
        "footer-texture": "url('/BG texture pattern.png')",
      },
    },
  },
  plugins: [],
};
