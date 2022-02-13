const paths = require('./paths')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: paths.index
    },
    output: {
        path: paths.dist,
        filename: "[name].bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Internet-shop",
            template: paths.template,
            filename: "index.html",
        })],
    module: {
        rules: [
            {
                test: [/\.css$/, /\.scss$/],
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: [/\.gif$/, /\,jpe?g$/, /\.ico$/, /\.png$/],
                type: "asset/resource"
            },
            {
                test: /\.svg$/,
                type: "asset/inline"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}