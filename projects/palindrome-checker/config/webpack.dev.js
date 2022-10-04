const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8085/'
    },
    devServer: {
        port: 8085,
        historyApiFallback: {
            index: 'index.html'
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'palindrome',
            filename: 'remoteEntry.js',
            exposes: {
                './PalindromeCheckerApp': './src/bootstrap'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);
