var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        'main': './client/src/js/main.js'
    },
    output: {
        filename: './client/dist/[name].js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'client/src/js'),
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;
