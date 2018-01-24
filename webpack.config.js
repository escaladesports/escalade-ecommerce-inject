const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const plugins = []
if (process.env.ANALYZE) {
	plugins.push(new BundleAnalyzerPlugin({
		analyzerMode: 'server',
		openAnalyzer: true
	}))
}
else if (process.env.NODE_ENV !== 'production'){
	plugins.push(new webpack.HotModuleReplacementPlugin())
}

let entry
let output

if(process.env.NODE_ENV === 'production'){
	console.log('PRODUCTION')
	plugins.push(
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false
		}),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
	)
	entry = [
		'./src/index.js'
	]
	output = {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/src/'
	}
}
else{
	entry = [
		'./dev/dev.js'
	]
	output = {
		path: path.join(__dirname, 'dist'),
		filename: 'dev.js',
		publicPath: '/dev/'
	}
}

module.exports = {
	devtool: 'eval',
	entry: entry,
	output: output,
	plugins: plugins,
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader'
			}],
			include: path.join(__dirname, '/')
		}]
	}
}
