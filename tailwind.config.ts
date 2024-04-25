import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        main: {
          "50": "#e5f7ff",
          "100": "#d0efff",
          "200": "#abe0ff",
          "300": "#78c9ff",
          "400": "#449fff",
          "500": "#1a74ff",
          "600": "#0058ff",
          "700": "#005bff",
          "800": "#004fde",
          "900": "#033bac",
          "950": "#032b86",
        },
      },
    },
  },
};
