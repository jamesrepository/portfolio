const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    entry: "./src/app/app.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js"
    }
});