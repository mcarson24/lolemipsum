const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public/js')
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
	      }
	    ]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}
