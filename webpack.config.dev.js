import path from "path";

export default {
  debug: true,
  devtool: "inline-source-map",
  noInfo: false,
  entry: [path.resolve(__dirname, "src/index")], // index.js is the entry point for js
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js" // referenced when calling script src in index.html
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] }, // bundle all js files
      { test: /\.css$/, loaders: ["style", "css"] } // bundle all css files
    ]
  }
};
