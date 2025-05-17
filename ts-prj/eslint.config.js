// @ts-check
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  // tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { rules: { "@typescript-eslint/no-unused-vars": "warn" } },
  prettierConfig,
);

// npm i -D typescript prettier eslint @eslint/js eslint-config-prettier typescript-eslint
// FYI, I don't use these: @typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint-plugin-prettier.
