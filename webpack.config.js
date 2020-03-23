const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEBUG = process.env.NODE_ENV === 'development';
const ASSETS_PATH = './';

module.exports = {
	mode: process.env.NODE_ENV,
	resolve: {
		extensions: [
			'.html',
			'.css',
			'.js',
			'.jsx'
		]
	},
	entry: {
		app: [
			'./public/common',
			'./src/index'
		]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react'
					]
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index',
			minify: {
				collapseWhitespace: !DEBUG,
				removeComments: !DEBUG
			}
		})
	],
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: DEBUG ? '/' : ASSETS_PATH,
		filename: 'app.js'
	}
};
