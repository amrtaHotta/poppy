import { defineConfig } from "vite";
import path from "path";
import nunjucks from "nunjucks";
import fs from "fs";

export default defineConfig({
  base: "./", // 相対パスを使用
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // ファイル名のフォーマット
      },
    },
  },
  plugins: [
    {
      name: "vite-plugin-nunjucks",
      transformIndexHtml: {
        enforce: "pre",
        transform() {
          const env = nunjucks.configure(path.resolve(__dirname, "src"), {
            autoescape: true,
            noCache: true,
          });

          const template = fs.readFileSync(
            path.resolve(__dirname, "src/index.njk"),
            "utf-8"
          );

          return nunjucks.renderString(template, {
            title: "poppy",
          });
        },
      },
    },
  ],
});
