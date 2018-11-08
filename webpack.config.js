const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const outputDirectory = "dist";

module.exports = {
    entry: {
        bundle: './src/index.js'
        // добавить './src/styles.css'
    },
    output: {
        path: path.resolve(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    plugins: [
        // new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            title: "Main page",
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader' }
            ]
        },  {
            test: /\.(gif|jpe?g|png|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            }
        },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    }
};
