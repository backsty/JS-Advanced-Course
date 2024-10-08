const path = require('path');

module.exports = {
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
},
module: {
    rules: [
    {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
    },
    ],
},
devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
},
};