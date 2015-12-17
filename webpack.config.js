var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');

var devServer = {
    contentBase: path.resolve(__dirname, './client/dist'),
    colors: true,
    quiet: false,
    noInfo: false,
    publicPath: '/static/',
    historyApiFallback: false,
    host: '127.0.0.1',
    port: 8000
};

module.exports = {
    devtool: 'source-map',
    debug: true,
    devServer: devServer,
    context: path.resolve(__dirname, './client/src'),
    entry: {
        app: [
            './'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist/static'),
        filename: '[name].js',
        publicPath: devServer.publicPath
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!cssnext-loader')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-decorators-legacy', 'transform-runtime'],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css', {
            allChunks: true
        })
    ],
    postcss: [
        autoprefixer, cssnext
    ],
    watch: true,
    resolve: {
        extensions: [
            '',
            '.js'
        ]
    }
};
