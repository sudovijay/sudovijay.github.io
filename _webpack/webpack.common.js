const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // eslint-disable-line
const PreloadWebpackPlugin = require("preload-webpack-plugin"); // eslint-disable-line

const is_dev = process.env.NODE_ENV === "development";

const file_name = is_dev ? "[name]" : "[name]-[hash]";

module.exports = {
    entry: {
        polyfill: "babel-polyfill",
        bundle: path.join(process.cwd(), "/src/init.js")
    },
    output: {
        filename: `${file_name}.js`,
        path: path.join(process.cwd(), "/public/build"),
        publicPath: "/build/"
    },
    devtool: !is_dev ? "false" : "source-maps",
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                loader: "babel-loader",
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },

            {
                test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "images/[name].[md5:hash:hex:8].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "fonts/[name].[md5:hash:hex:8].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: path.join(process.cwd(), "templ/index.templ.html"),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
        new PreloadWebpackPlugin()
    ]
};
