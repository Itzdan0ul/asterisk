const path = require('path')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: path.join(__dirname, 'src', 'renderer', 'javascript', 'bundle', 'index.js'),
	output: {
		path: path.join(__dirname, 'src', 'renderer', 'javascript', 'bundle', 'dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{ test: /\.vue$/, exclude: /node_modules/, use: 'vue-loader' }
		],
	},
  resolve: {
    extensions: ['.js'],
		alias: {
			'@renderer': path.join(__dirname, 'src/renderer/'),
			'@assets': path.join(__dirname, 'src/renderer/assets'),
			'@components': path.join(__dirname, 'src/renderer/vue/components')
		}
  },
	plugins: [
		new VueLoaderPlugin(),
		new DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false
		})
	]
}