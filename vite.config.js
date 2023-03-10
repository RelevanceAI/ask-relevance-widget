import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import devtools from "solid-devtools/vite";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

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
    polyfillDynamicImport: false,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: "./src/index.jsx",
      output: {
        manualChunks: undefined,
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
            postcssImport(),
            postcssUrl({
              url: "inline",
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
