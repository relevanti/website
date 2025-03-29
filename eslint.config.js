import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import importPlugin from "eslint-plugin-import"
import jsxA11y from "eslint-plugin-jsx-a11y"
import prettier from "eslint-plugin-prettier"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:jsx-a11y/recommended",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended",
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../*"],
        },
      ],
      "import/order": [
        "error",
        {
          groups: [["builtin", "external", "internal"]],
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",
      "import/no-extraneous-dependencies": "error",
      "jsx-a11y/anchor-is-valid": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  }
)
