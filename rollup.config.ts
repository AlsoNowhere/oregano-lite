import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
// import terser from "@rollup/plugin-terser";

export default {
  input: "./src/main.ts",
  output: {
    file: "./dist/app.js",
    format: "iife",
  },
  plugins: [resolve(), typescript()],
};
