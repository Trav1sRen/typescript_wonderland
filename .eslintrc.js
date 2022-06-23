module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true
    },
    extends: ['standard', 'prettier', 'plugin:testcafe/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
        'testcafe',
        'import',
        'node',
        'promise'
    ],
    rules: {
        'prettier/prettier': 'error',
        // Use tsconfig.json to detect unused vars
        "no-unused-vars": 0,
        '@typescript-eslint/no-unused-vars': 0
    }
};
