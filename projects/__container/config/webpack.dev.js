const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                landingapp: 'landingapp@http://localhost:8081/remoteEntry.js',
                digitalclock: 'digitalclock@http://localhost:8082/remoteEntry.js',
                recipes: 'recipes@http://localhost:8083/remoteEntry.js',
                times_table_generator: 'times_table_generator@http://localhost:8084/remoteEntry.js',
                palindrome: 'palindrome@http://localhost:8085/remoteEntry.js',
                rockpaperscissors: 'rockpaperscissors@http://localhost:8086/remoteEntry.js',
                whackamole: 'whackamole@http://localhost:8087/remoteEntry.js',
                memory: 'memory@http://localhost:8088/remoteEntry.js',
                connectfour: 'connectfour@http://localhost:8089/remoteEntry.js',
                spaceinvaders: 'spaceinvaders@http://localhost:8180/remoteEntry.js',
                frogger: 'frogger@http://localhost:8181/remoteEntry.js',
                breakout: 'breakout@http://localhost:8182/remoteEntry.js',
                wordle: 'wordle@http://localhost:8183/remoteEntry.js',
                calculator: 'calculator@http://localhost:8184/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);
