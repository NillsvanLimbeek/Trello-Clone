module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'semi': ['error', 'never'],
        'linebreak-style': 'off',
        'comma-dangle': 'off',
        'prefer-destructuring': 'off',
        'object-curly-newline': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}