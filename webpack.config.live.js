import path from "path";
import webpack from "webpack";

export default {
  debug: true,
  devtool: "source-map",
  noInfo: false,
  entry: [path.resolve(__dirname, "src/index")], // index.js is the entry point for js
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js" // referenced when calling script src in index.html
  },
  plugins: [
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] }, // bundle all js files
      { test: /\.css$/, loaders: ["style", "css"] } // bundle all css files
    ]
  }
};
