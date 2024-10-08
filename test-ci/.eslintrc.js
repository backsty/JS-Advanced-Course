export default {
    env: {
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn'
    }
};