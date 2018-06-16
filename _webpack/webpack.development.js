const Merge = require("webpack-merge"); // eslint-disable-line
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); // eslint-disable-line
const historyApiFallback = require("connect-history-api-fallback"); // eslint-disable-line
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin"); // eslint-disable-line
const CommonConfig = require("./webpack.common.js");

module.exports = Merge(CommonConfig, {
    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3000,
            open: false,
            server: {
                baseDir: ["public"],
                middleware: [historyApiFallback()],
            },
            notify: false,
            // proxy: 'savesubs.test',
            files: [path.join(process.cwd(), "/src/***/*.js")],
        }),
        new HardSourceWebpackPlugin(),
    ],
});
