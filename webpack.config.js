const path = require('path');

module.exports = {
    entry: {
        app: './js/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mybundle.js'
    },

    mode: 'development',

    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }

};