const path = require('path');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = {
	output: {
		//path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new WebpackManifestPlugin()
	]
}
