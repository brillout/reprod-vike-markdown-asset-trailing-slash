import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [vike(), mdx(), react({})],
  build: {
    target: "es2022",
  },
});
