const path = require('path');

module.exports = {
    entry: {
        vendor: "./src/vendor.js",
        main: "./src/app/app.js"
    },
    module: {
        rules: [
            { 
                test: /\.html$/, 
                use: [
                    "html-loader"
                ]
            },
            { 
                test: /\.(svg|png|jpg|gif)$/, 
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
            
        ]
    },
    
}