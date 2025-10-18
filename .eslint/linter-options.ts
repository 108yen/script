import type { Linter } from "eslint"
import { sharedFiles } from "./shared"

export const linterOptions: Linter.Config = {
  files: sharedFiles,
  linterOptions: {
    noInlineConfig: true,
  },
  name: "eslint/linter-options",
}
