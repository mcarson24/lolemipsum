const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		styles: './src/css/styles.css',
		app: './src/js/app.js'
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
	plugins: [
	new MiniCssExtractPlugin({
      filename: 'public/css/[name].css'
    }),
	new VueLoaderPlugin(),
	]
}
