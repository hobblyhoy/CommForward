"use strict";

var path = require('path');
var { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: path.resolve('./index.js')
	, mode: 'development'
	, output: {
		filename: 'build.index.js'
		, path: path.resolve(__dirname + '/Build')
		, publicPath: './Build/'
	}
	, resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }		
		, extensions: ['*', '.js', '.vue', '.json']
	}
	, module: {
		rules: [
			{
				test: /\.css/
				, use: ['style-loader', 'css-loader']
			}
			,{
				test: /\.vue/
				, loader: 'vue-loader'
			}
			,{
				test: /\.(png|svg|jpg|jpeg|gif)$/
				, use: [{
					loader: "file-loader"
					, options: {
						useRelativePath: true
					}
				}]
			}
		]
	}
	, plugins: [
		new VueLoaderPlugin()
	]
}