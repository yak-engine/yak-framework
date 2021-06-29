const path = require('path');

module.exports = {
    entry: './src/application.ts',
    devtool: "inline-source-map",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: false
    },
    output: {
        filename: 'engine.js',
        path: path.join(__dirname, 'dist')
        // path: path.join(__dirname, '../editor/public/preview'),
    }
};