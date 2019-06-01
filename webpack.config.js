const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app/app.js",
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
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ]
}