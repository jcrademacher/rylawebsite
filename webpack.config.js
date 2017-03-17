var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		main: './dev/js/main.index.js',
	},
	output: { path: './src/pages', filename: '[name].bundle.js'},
	module: {
		loaders: [
			{
				test: /jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules|resources)/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader'
			},
			{
				test: /\.css$/, loader: "style-loader!css-loader"
			}
		]
	}
};
