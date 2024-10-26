export default {
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    transform: {
        '^.+\\.(js|jsx|mjs)$': 'babel-jest',
      },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};