import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Добавление правил для ESLint
      'no-unused-vars': 'warn',
    },
  },
  pluginJs.configs.recommended,
  {
    ignores: ['dist/**'],
  },
];