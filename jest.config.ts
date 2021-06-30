import { compilerOptions } from "./tsconfig.json"
import {  pathsToModuleNameMapper } from "ts-jest/utils"

export default {
	clearMocks: true,
	coverageProvider: "v8",
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>"}),
	verbose: true,
	preset: "ts-jest"
}

