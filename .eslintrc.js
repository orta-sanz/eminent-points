module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    env: {
        browser: true,
        amd: true,
        node: true
    },
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
