var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
	entry: [
		'./src/index'
	],
	output:{
		path:path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			warnings: false
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CopyWebpackPlugin([
			{ from: './style', to: './dist'}
		])
	],
	module: {
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}

		]
	},
	devServer: {
		contentBase: './dist',
		port: 7070
	}
}
module.exports = config;