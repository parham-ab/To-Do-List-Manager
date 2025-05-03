import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const fileNames = [
  "src",
  "assets",
  "constants",
  "hooks",
  "context",
  "components",
  "pages",
  "service",
  "utils",
  "themes",
  "services",
  "styles",
  "features",
  "routes",
  "public",
  "store",
  "layout",
];

const pathes = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
  }),
  ""
);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      ...pathes,
    },
  },
});
