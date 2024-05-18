import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#032B86",
          50: "#DBE6FE",
          100: "#BDD1FE",
          200: "#82A7FC",
          300: "#467DFB",
          400: "#0A53FA",
          500: "#043EC2",
          600: "#032B86",
          700: "#03287C",
          800: "#032572",
          900: "#022168",
          950: "#022063",
        },
      },
    },
  },
};
