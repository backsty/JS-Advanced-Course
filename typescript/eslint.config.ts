export default [
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2024,
                sourceType: 'module',
            },
        },
        rules: {
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-undef': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/max-len': ['error', 120],
            '@typescript-eslint/prefer-arrow-callback': 'error',
            '@typescript-eslint/func-names': 'off',
            '@typescript-eslint/no-console': 'off',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-warning-comments': 'error',
        },
    },
    {
        files: ['**/*.test.ts'],
        rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-undef': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/max-len': 'off',
            '@typescript-eslint/prefer-arrow-callback': 'off',
            '@typescript-eslint/no-console': 'off',
            '@typescript-eslint/no-shadow': 'off',
        },
    },
];