var path = require('path');
var webpackMerge = require("webpack-merge");

var config = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',   //服务器的ip地址
        port: 4747,  //端口
        open: false,  //自动打开页面, 用debug打开
        hot: true
    },
};

module.exports = function (env, defaultConfig) {
    return webpackMerge(defaultConfig, config);
};