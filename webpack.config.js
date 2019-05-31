const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
		app: [
			'./src/css/styles.css',
			'./src/js/app.js'
		]
	},
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'public/js/[name].js'
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
	    rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [ 
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader' 
				]
			},
        ]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
	new MiniCssExtractPlugin({
		filename: 'public/css/[name].css',
		chunkFilename: '[id].css'
    }),
	new VueLoaderPlugin(),
	]
}
