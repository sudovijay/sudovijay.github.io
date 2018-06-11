const webpack = require('webpack'); // eslint-disable-line
const Merge = require('webpack-merge'); // eslint-disable-line
const path = require('path');
const glob = require('glob-all'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // eslint-disable-line

const CommonConfig = require('./webpack.common.js');

const pathsToClean = ['build'];

const cleanOptions = {
    root: path.join(process.cwd(), '/public/'),
    verbose: true,
    dry: false,
};

module.exports = Merge(CommonConfig, {
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),

        // new BundleAnalyzerPlugin(),
    ],
});
