/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://tailwindcss.com/docs/content-configuration
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/view/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // https://tailwindcss.com/docs/theme
  theme: {
    screens: {
      tabletPortrait: "750px",
      tabletLandscape: "1000px",
      desktop: "1400px",
    },
    fontSize: {
      sm: ["1.4rem", "1.5em"],
      md: ["2rem", "1.35em"],
      lg: ["3rem", "1.15em"],
      xl: ["4rem", "1.15em"],
    },
    fontFamily: {
      heading: ["var(--font-lora-local)"],
      body: ["var(--font-local-inter)"],
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
      },
      spacing: {
        "card-sm": "1rem",
        "card-md": "2rem",
        "card-lg": "3rem",
        // GridContainer
        "container-phone": "33rem",
        "container-tablet-portrait": "80rem",
        "container-tablet-landscape": "100rem",
        "container-desktop": "130rem",
      },
      gridTemplateColumns: {
        24: "repeat(24, 1fr)",
      },
      gridColumnEnd: {
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
      },
      minHeight: {
        1: "1rem",
        2: "2rem",
        4: "4rem",
        6: "6rem",
        8: "8rem",
        10: "10rem",
        12: "12rem",
        14: "14rem",
        16: "16rem",
        18: "18rem",
        20: "20rem",
        22: "22rem",
        24: "24rem",
        26: "26rem",
        28: "28rem",
        30: "30rem",
      },
      zIndex: {
        navigationOverlay: 20,
        navigationBar: 21,
        editPatientOverlay: 22,
      },
    },
  },
  // https://tailwindcss.com/docs/plugins
  plugins: [],
};
