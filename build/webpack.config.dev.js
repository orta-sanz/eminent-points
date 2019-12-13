const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ...baseConfig,
    mode: 'development',
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    }
};
