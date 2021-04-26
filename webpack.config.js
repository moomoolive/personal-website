const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const ESlintWebpackPlugin = require('eslint-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    plugins: [
        new htmlWebpackPlugin({
            title: "Mostafa Elbannan",
            template: './public/index.html'
        }),
        new ESlintWebpackPlugin({}),
        new AddAssetHtmlPlugin({ 
            filepath: require.resolve('./service-worker.js')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}