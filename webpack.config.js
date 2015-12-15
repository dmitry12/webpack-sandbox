var path = require('path');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');

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
                loader: "style-loader!css-loader!postcss-loader!cssnext-loader"
            }
        ]
    },
    postcss: function() {
        return [autoprefixer, cssnext]
    }
}

module.exports = config;

