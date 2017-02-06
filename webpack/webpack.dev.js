/**
 *  Dev Webpack Configuration
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = (options) => ({
  // This is the base directory for resolving entry, loaders etc.
  context: path.resolve(process.cwd(), "app/"),
  // Here is where the application starts executing and webpack starts bundling
  // [name] will be swoleciety
  entry: {
    swoleciety: './app.js'
  },
  // Where to output your bundle
  output: {
    // Name of the output bundle
    filename: "bundle.js",
    // Where the bundle will be written to
    path: path.resolve(process.cwd(), 'build'),
    // The public URL of the output directory when referenced in the browser. 
    // Relative paths are relative to the html page
    // Use this path when trying to load an asset/ 
    // i.e background-image: url(/build/sample.png)
    publicPath: 'build/',
    library: "Swoleciety",
    libraryTarget: 'umd'
  },
  // webpack-dev-server serves the output files from public path listed above
  devServer: {
    // Port number to listen for requests
    port: 4000,
    host: 'localhost',
    // Enables gzip compression
    compress: true,
    // This is where the server should send content from
    contentBase: path.resolve(process.cwd(), './app'),
    // Although the output bundle is written to the build directory
    // We want to tell webpack where to host the generated bundle 
    // on the server. 
    publicPath: '/public/assets/'
  },
  // Creates a simple source map
  devtool: "cheap-eval-source-map",
  performance: {
    // Shows warning message if assets too large
    hints: "warning",
  },
  // Don;t bundle these modules. Request them at runtime
  // by adding script tag in html file
  externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['babel-preset-es2015','babel-preset-react']
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
})