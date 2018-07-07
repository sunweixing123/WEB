const path = require('path');
module.exports = {
    entry: {
        entry: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [
                {
                    loader: 'babel-loader',
                }
            ]          
        }],
    }
}