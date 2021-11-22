import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: '.',
  testMatch: ['**/test/**/*.test.(ts|tsx|js|jsx)'],
  verbose: true,
  clearMocks: true,
  resetModules: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__fixtures__/',
    '/__tests__/',
    '/(__)?mock(s__)?/',
    '/__jest__/',
    '.?.min.js',
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts'],
  moduleNameMapper: {
    '^~controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^~interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^~repositories/(.*)$': '<rootDir>/src/repositories/$1',
    '^~routes/(.*)$': '<rootDir>/src/routes/$1',
    '^~schemas/(.*)$': '<rootDir>/src/schemas/$1',
    '^~utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};

export default config;
