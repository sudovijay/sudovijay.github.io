const webpack = require("webpack"); // eslint-disable-line
const Merge = require("webpack-merge"); // eslint-disable-line
const path = require("path");
const glob = require("glob-all"); // eslint-disable-line
const CleanWebpackPlugin = require("clean-webpack-plugin"); // eslint-disable-line
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // eslint-disable-line
const FaviconsWebpackPlugin = require("favicons-webpack-plugin"); // eslint-disable-line

const CommonConfig = require("./webpack.common.js");

const pathsToClean = ["build"];

const cleanOptions = {
    root: path.join(process.cwd(), "/public/"),
    verbose: true,
    dry: false
};

module.exports = Merge(CommonConfig, {
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),

        // new BundleAnalyzerPlugin(),

        new FaviconsWebpackPlugin({
            // Your source logo
            logo: "./src/assets/favicon.png",
            // The prefix for all image files (might be a folder or a name)
            prefix: "icons/",
            // Emit all stats of the generated icons
            emitStats: false,
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: "#ef6551",
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: "Vijay Singh"
        })
    ]
});
