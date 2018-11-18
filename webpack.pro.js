var webpackMerge = require("webpack-merge");

var config = {
};

module.exports = function (env, defaultConfig) {
    return webpackMerge(defaultConfig, config);
};