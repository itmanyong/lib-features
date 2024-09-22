import { defineConfig } from "tsup";

export default defineConfig((ops) => {
  ops.entry = ["src/index.ts"];
  ops.outDir = "dist";
  ops.format = ["esm", "cjs"];
  ops.globalName = "libToolKit";
  ops.clean = true;
  ops.dts = true;
  ops.treeshake = true;
  ops.sourcemap = !!ops.watch;
  ops.minify = ops.watch ? false : "terser";
  return ops;
});
