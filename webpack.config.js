
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');


var config = {
	context: __dirname + '/app',
	entry:{
		bundle: './index.js',
		vendors : ['jquery','bootstrap']
	},
	resolve: {
    	alias: {
		    'jquery': __dirname + '/node_modules/jquery/dist/jquery.min.js',
		    'bootstrap': __dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'
    	}
    },
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new webpack.DefinePlugin({
			ON_TEST: process.env.NODE_ENV === 'test'
		}),
		new webpack.ProvidePlugin({
        	$: 'jquery',
        	jQuery: 'jquery',
        	'window.jQuery': 'jquery',
       		'root.jQuery': 'jquery'
   		})
	],

	module: {
		loaders: [
			{test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/},
			{test: /\.html$/, loader: 'raw', exclude: /node_modules/},
			{test: /\.css$/, loader: 'style!css!postcss', exclude: /node_modules/},
			{test: /\.styl$/, loader: 'style!css!stylus!postcss', exclude: /node_modules/},
			{test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
    		{test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
    		{test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    		{test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
    		{
        		test: /\.(jpe?g|png|gif|svg)$/i,
        			loaders: [
            			'file?hash=sha512&digest=hex&name=[hash].[ext]',
            			'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        			]
    		}
		],
		noParse: ['jquery','bootstrap']
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]

};

if (process.env.NODE_ENV === 'production') {
	config.output.path = __dirname + '/dist';
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
	config.devtool = 'source-map'
}

module.exports = config;