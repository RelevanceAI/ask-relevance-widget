import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    solidPlugin(),
    solidSvg(),
    devtools({
      autoname: true,
      locator: true,
    }),
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
    },
  },
});
