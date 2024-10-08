import { defaults } from 'jest-config';

export default {
    ...defaults,
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'mjs', 'test.js'],
    testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
    transform: {
        '^.+\\.m?js$': 'babel-jest',
    },
};