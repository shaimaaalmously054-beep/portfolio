import { defineConfig } from "vite";

const cvPathPlugin = {
  name: "cv-paths",
  transformIndexHtml(html) {
    return html.replaceAll("./public/cv.pdf", "./cv.pdf");
  },
};

export default defineConfig({
  base: "./",
  plugins: [cvPathPlugin],
  build: {
    target: "es2020",
    cssMinify: true,
    sourcemap: false,
  },
});
