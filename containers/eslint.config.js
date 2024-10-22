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
            "max-len": ["error", 80],
            "prefer-arrow-callback": "error",
            "func-names": "error",
            "no-console": "error",
            "no-magic-numbers": "error",
            "no-shadow": "error",
            "no-unused-vars": "error",
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
            "func-names": "off",
            "no-console": "off",
            "no-magic-numbers": "off",
            "no-shadow": "off",
            "no-unused-vars": "off",
            "no-warning-comments": "off",
        },
    },
];