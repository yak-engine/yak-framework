const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const npm_package = require('./package.json')

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		'yak-engine': './src/public-api.ts',
		'yak-engine.min': './src/public-api.ts'
	},
	output: {
		path: path.join(__dirname, 'dist/bundles'),
		filename: '[name].js',
		libraryTarget: 'umd',
		library: 'yak-engine',
		umdNamedDefine: true
	},
	resolve: {
        alias: {
            lib: 'mt'
        },
		extensions: ['.tsx', '.ts', '.js']
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				include: /\.min\.js$/
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: 'package.json', to: '../' },
                { from: 'README.md', to: '../' }
			]
		})
	]
};
