// This file isn;t transpiled so muct use CommonJS and ES5

// Register babel to transpile before our tests run
require("babel-register")();

// Disable webpack features that Mocha doesnt understand
require.extensions[".css"] = function() {};
