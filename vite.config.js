import postcss from "postcss";
import devtools from "solid-devtools/vite";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
  plugins: [
    solidPlugin(),
    solidSvg(),
    devtools({
      autoname: true,
      locator: true,
    }),
    cssInjectedByJsPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    rollupOptions: {
      input: "./src/index.jsx",
      output: {
        inlineDynamicImports: true,
        format: "iife",
        entryFileNames: "bundle.js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
      plugins: [
        postcss({
          plugins: [
            tailwindcss({
              content: ["./src/**/*.tsx", "./src/**/*.jsx"],
            }),
          ],
          extract: false,
          modules: false,
          autoModules: false,
          minimize: true,
          inject: false,
          sourceMap: true,
        }),
      ],
    },
  },
});
