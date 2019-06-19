const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            { 
                test: /\.scss$/, 
                use: [
                    "style-loader", // 3. Inject css styles into DOM
                    "css-loader", // 2. Turns css into common js
                    "sass-loader" // 1. Turns sass into css
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/works.html",
            filename: "works.html"
        })
    ]
});