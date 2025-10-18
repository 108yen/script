import type { Linter } from "eslint"
import vitestPlugin from "@vitest/eslint-plugin"
import { sharedTestFiles } from "./shared"

export const vitestConfig: Linter.Config = {
  files: sharedTestFiles,
  name: "eslint/vitest",
  plugins: { vitest: vitestPlugin },
  rules: {
    ...vitestPlugin.configs.recommended.rules,
  },
}
