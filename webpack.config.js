"use strict";

var path = require('path');
var { VueLoaderPlugin } = require('vue-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve('./index.js')
	, mode: 'development'
	, output: {
		filename: 'build.[chunkhash].index.js'
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
						useRelativePath: false
						, name: '[name].[ext]'
					}
				}]
			}
		]
	}
	, plugins: [
		new VueLoaderPlugin()
		, new HtmlWebpackPlugin({
			filename: '../index.html'
			, template: './index.template.html'
		})
		, new CleanWebpackPlugin(['Build'])
	]
}