const path = require('path');
const common = require("./webpack.config");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            { 
                test: /\.scss$/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // 2. Turns css into common js
                    "sass-loader" // 1. Turns sass into css
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), 
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                filename: "index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                template: "./src/works.html",
                filename: "works.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    }, 
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contentHash].bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contentHash].css'
        }),
        new CleanWebpackPlugin(),
    ]
});