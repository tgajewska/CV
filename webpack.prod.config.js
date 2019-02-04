const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name].[ext]',
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src', 'link:href']
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css'
        }),
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new PreloadWebpackPlugin(),
        new GoogleFontsPlugin({
            fonts: [
                {
                    family: "Open Sans Condensed"
                },
            ]
        })
    ]

}