var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/app/app.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.[contentHash].js'
    },
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