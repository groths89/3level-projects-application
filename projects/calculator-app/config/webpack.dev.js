const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8184/'
    },
    devServer: {
        port: 8184,
        historyApiFallback: {
            index: 'index.html'
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'calculator',
            filename: 'remoteEntry.js',
            exposes: {
                './CalculatorApp': './src/bootstrap'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);
