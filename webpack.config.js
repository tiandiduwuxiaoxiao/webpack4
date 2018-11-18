var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    mode: 'development',
    entry: {
        main: ['./src/main.ts', './src/head/head.ts']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.(htm|html)$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // 编译顺序从右往左
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Tims webpack config',
            template: './index.html',
            filename: './index.html',
            chunks: ['main', 'head'],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin([path.join(__dirname, 'dist')])
    ]
};
module.exports = function (env) {
    debugger;
    env = env || 'dev';
    return require("./webpack." + env + ".js")(env, config);
};