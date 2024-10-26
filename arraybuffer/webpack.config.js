import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


// Это поможет получить dirname в модулях ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: 'html-loader',
            },
            ],
        },
        {
            test: /\.css$/,
            use: [
            MiniCssExtractPlugin.loader, 'css-loader'
            ],
        },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
            new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
};