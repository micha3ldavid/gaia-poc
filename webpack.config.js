
const path = require('path');
const TextExtractor = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./client/entry.js'
	],
	resolve:
	{
	  extensions: ['.js', '.jsx']
	},
	output:
	{
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins:
	[
		new TextExtractor('css/bundle.css')
	],
	module:
	{
		loaders:
		[
			{
				test: /\.scss$/,
				use: TextExtractor.extract({
					fallback: ['style-loader'],
					use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
				})
			},
			{
				test: /\.jsx?$/,
				loader: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?[a-z0-9]+)?$/,
				loader: ['file-loader?name=fonts/[name].[ext]'],
				exclude: /node_modules/
			}
		]
	}
};
