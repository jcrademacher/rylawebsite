var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './dev/js/index.js',
	output: { path: './src/pages', filename: 'main.bundle.js'},
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
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.css$/, loader: "style-loader!css-loader" 
			}
		]
	}
};
