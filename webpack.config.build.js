var webpack = require('webpack')
module.exports = require('./webpack.config.js')

module.exports.entry = {
    'vue-online': './main.js'
}

module.exports.output.library = 'VueOnlineComponent';
module.exports.output.libraryTarget = 'umd';
