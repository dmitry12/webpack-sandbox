var path = require('path');
var autoprefixer = require('autoprefixer');

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
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function() {
        return [autoprefixer]
    }
}

module.exports = config;

