module.exports = {
  roots: [
    "<rootDir>/src",
    "<rootDir>/test"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts)",
    "**/?(*.)+(spec|test).+(ts)"
  ],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  moduleNameMapper: {
    "@package-name/(.*)": "<rootDir>/src/$1"
  },
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: [
    "**/*.{js,ts}",
    "!**/*.d.ts",
    "!**/*.spec.ts",
    "!**/node_modules/**",
  ],
  preset: 'ts-jest',
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
}
