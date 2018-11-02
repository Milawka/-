const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const outputDirectory = "dist";

module.exports = {
    mode: "development",
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            title: "Main page",
            hash: true,
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader' }
            ]
        }]
    }
};
