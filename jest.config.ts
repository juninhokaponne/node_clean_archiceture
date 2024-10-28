import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testEnvironment: "node",
};

export default config;
