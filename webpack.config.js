var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devtool: 'cheap-module-source-map',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: 'node_modules',
				loader: 'babel'
			},
			{
				test: /\.css$/,
				exclude: 'node_modules',
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css", {
			allChunks: true,
		})
	],
};
