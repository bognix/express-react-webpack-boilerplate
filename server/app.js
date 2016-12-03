const express = require('express'),
	app = express(),
	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackConfig = require('./../webpack.config'),
	path = require('path');

let compiler;

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
	log: console.log
}));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, function () {
	console.log('Server is running on port 3000');
});
