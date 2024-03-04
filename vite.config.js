//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
    plugins: [
        libInjectCss(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.js"),
            name: "airplane-vite",
            fileName: "index",
        },
        rollupOptions: {
            external: ["react"],
        },
        cssCodeSplit: true,
    },
});