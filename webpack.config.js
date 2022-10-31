const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: './dist/bundle.js',
        filename: 'bundle.js',
        libraryTarget: 'umd',
        library: 'VMTWidget',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2'],
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                // options: {
                //     // outputPath: './dist',
                // },
            },
        ],
    },
    plugins: [
        new UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise', // works as expected
        }),
    ],
};
