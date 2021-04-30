const path = require('path')

module.exports = {
    productionSourceMap: false,
    pwa: {
        name: "mostafa's website",
        workboxPluginMode: 'GenerateSW'
    },
    devServer: {
        port: 8060
    },
    css: {
        loaderOptions: {
            // import scss constants into each scss block
            scss: { prependData: `@import "~@/scss/_consts.scss";` }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "$config": path.resolve(__dirname, 'App.config.js')
            }
        }
    },
    // remove all comments from build files
    chainWebpack: config => {
        config.optimization.minimizer('terser').tap(args => {
            args[0].terserOptions.output = {
                ...args[0].terserOptions.output,
                comments: false
            }
            return args
        })
    }
}