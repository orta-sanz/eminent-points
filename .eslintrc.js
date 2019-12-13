module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        indent: [
            'error',
            4,
            { SwitchCase: 1 }
        ],
        semi: [
            'error',
            'always'
        ],
        'vue/html-indent': 'off'
    }
}
