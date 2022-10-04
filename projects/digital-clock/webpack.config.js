const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'digitalclock',
            filename: 'remoteEntry.js',
            exposes: {
                './DigitalClock': './src/bootstrap'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}