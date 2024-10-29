export default [
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2024,
            },
        },
        rules: {
            "no-unused-expressions": "error",
            "no-undef": "error",
            "no-unused-vars": "error",
            "max-len": ["error", 120],
            "prefer-arrow-callback": "error",
            "func-names": "off",
            "no-console": "off",
            "no-shadow": "error",
            "no-warning-comments": "error",
        },
    },
    {
        files: ["**/*.test.js"],
        rules: {
            "no-unused-expressions": "off",
            "no-undef": "off",
            "no-unused-vars": "off",
            "max-len": "off",
            "prefer-arrow-callback": "off",
            "no-console": "off",
            "no-shadow": "off",
        },
    },
];