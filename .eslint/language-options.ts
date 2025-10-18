import type { Linter } from "eslint"
import globals from "globals"
import { parser } from "typescript-eslint"
import { sharedFiles } from "./shared"

export const languageOptions: Linter.Config = {
  files: sharedFiles,
  languageOptions: {
    globals: {
      ...globals.node,
      // ...globals.browser,
      // ...globals.es2015,
    },
    parser,
    parserOptions: {
      ecmaVersion: 10,
      project: "./tsconfig.json",
      sourceType: "module",
    },
  },
  name: "eslint/language-options",
}
