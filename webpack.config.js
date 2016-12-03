var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./front/app.jsx'
	],
	output: {
		path: '/',
		filename: 'bundle.js',
		publicPath: 'http://localhost:3000/scripts/'
	},
	plugins: [],
	module: {
		loaders: [
			{
				test: /\.js*/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
		modulesDirectories: [
			'front',
			'node_modules'
		]
	},
	devtool: ['source-map']
};
