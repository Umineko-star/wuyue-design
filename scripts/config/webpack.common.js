const {resolve} = require('path');
const {PROJECT_PATH, isDev} = require('../constants');
const webpack = require('webpack'); // 访问内置的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PLUGINS = [
	new webpack.ProgressPlugin(),
	// 配置html，自动引入打包出的js文件
	new HtmlWebpackPlugin({
		template: resolve(PROJECT_PATH, './public/index.html'),
		filename: 'index.html',
		cache: false,
		minify: isDev
			? false
			: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
					collapseBooleanAttributes: true,
					collapseInlineTagWhitespace: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					minifyCSS: true,
					minifyJS: true,
					minifyURLs: true,
					useShortDoctype: true,
				},
	}),
];
const getCssLoaders = (importLoaders) => {
	return [
		'style-loader',
		{
			loader: 'css-loader',
			options: {
				modules: {
					auto: true,
					localIdentName: '[local]__[hash:base64:5]',
				},
				// modules: false,
				sourceMap: isDev,
				importLoaders,
			},
		},
		'postcss-loader',
	];
};
module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: {
		app: resolve(PROJECT_PATH, './src/main.tsx'),
	},
	output: {
		filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
		path: resolve(PROJECT_PATH, './bundle/frontend'),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
		alias: {
			'@src': resolve(PROJECT_PATH, './src'),
			'@components': resolve(PROJECT_PATH, './src/components'),
			'@utils': resolve(PROJECT_PATH, './src/utils'),
		},
	},
	plugins: PLUGINS,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: getCssLoaders(1),
				// [
				// 	'style-loader',
				// 	{
				// 		loader: 'css-loader',
				// 		options: {
				// 			modules: false, // 默认就是 false, 若要开启，可在官网具体查看可配置项
				// 			sourceMap: isDev, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
				// 			importLoaders: 0, // 指定在 CSS loader 处理前使用的 laoder 数量
				// 		},
				// 	},
				// ],
			},
			{
				test: /\.less$/i,
				use: [
					// 'style-loader',
					// {
					// 	loader: 'css-loader',
					// 	options: {
					// 		modules: {
					// 			localIdentName: '[local]__[hash:base64:5]',
					// 		},
					// 		sourceMap: isDev,
					// 		importLoaders: 2, // 需要先被 less-loader 处理，所以这里设置为 1
					// 	},
					// },
					// 'postcss-loader',
					// {
					// 	loader: 'less-loader',
					// 	options: {
					// 		sourceMap: isDev,
					// 	},
					// },
					...getCssLoaders(2),
					{
						loader: 'less-loader',
						options: {
							sourceMap: isDev,
						},
					},
				],
			},
			{
				test: /\.scss$/i,
				use: [
					...getCssLoaders(2),
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDev,
						},
					},
				],
			},
			// 处理图片、文件、字体
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.txt/,
				type: 'asset/source',
			},
			{
				// 通用文件则使用 asset，此时会按照默认条件自动决定是否转换为 Data URI
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset',
				parser: {
					// 如果文件大小小于 8kb，那么会转换为 data URI，否则为单独文件。
					// 8kb 是默认值，你可以根据需要进行调整
					dataUrlCondition: {
						maxSize: 8 * 1024, // 8kb
					},
				},
			},
			{
				test: /\.(tsx?|jsx?)$/,
				loader: 'babel-loader',
				options: {cacheDirectory: true},
				exclude: /node_modules/,
			},
		],
	},
};
