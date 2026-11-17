import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import css from "@eslint/css";
import { includeIgnoreFile } from "@eslint/config-helpers";
import { join } from "node:path";

const prettierIgnorePath = join(import.meta.dirname, ".prettierignore");

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierRecommended,
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
  },
  includeIgnoreFile(prettierIgnorePath, "Imported .prettierignore patterns"),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
