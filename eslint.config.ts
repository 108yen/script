import type { Linter } from "eslint"
import prettierConfig from "eslint-config-prettier"
import typegen from "eslint-typegen"
import { defineConfig } from "eslint/config"
import {
  baseConfig,
  cspellConfig,
  importConfigArray,
  languageOptions,
  linterOptions,
  perfectionistConfig,
  typescriptConfig,
  vitestConfig,
} from "./.eslint"

const ignoresConfig: Linter.Config = {
  ignores: [
    "dist/**",
    "@types/**",
    "node_modules/**",
    "build/**",
    "dist/**",
    "bin/**",
    "pnpm-lock.yaml",
    ".eslintcache",
  ],
  name: "eslint/ignores",
}

const config: Linter.Config[] = defineConfig(
  linterOptions,
  ignoresConfig,
  languageOptions,
  ...importConfigArray,
  baseConfig,
  typescriptConfig,
  prettierConfig,
  perfectionistConfig,
  cspellConfig,
  vitestConfig,
)

export default typegen(config, {
  dtsPath: "./@types/eslint-typegen.d.ts",
})
