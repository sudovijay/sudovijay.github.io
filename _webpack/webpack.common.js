const path = require('path');
const glob = require('glob-all'); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line
const tailwindcss = require('tailwindcss'); // eslint-disable-line
const autoprefixer = require('autoprefixer'); // eslint-disable-line
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line

const is_dev = process.env.NODE_ENV === 'development';

const file_name = is_dev ? '[name]' : '[name]-[hash]';

module.exports = {
    entry: {
        bundle: path.join(process.cwd(), '/src/init.js'),
    },
    output: {
        filename: `${file_name}.js`,
        path: path.join(process.cwd(), '/public/build'),
    },
    devtool: !is_dev ? 'false' : 'source-maps',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: is_dev,
                                minimize: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    tailwindcss('./tailwind.js'),
                                    require('cssnano')({
                                        autoprefixer: false,
                                        discardComments: { removeAll: true },
                                    }),
                                    autoprefixer({
                                        remove: false,
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9', // React doesn't support IE8 anyway
                                        ],
                                        flexbox: 'no-2009',
                                    }),
                                ],
                                sourceMap: is_dev,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: is_dev,
                            },
                        },
                    ],
                }),
            },

            {
                test: /\.(js|jsx|mjs)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true,
                },
            },

            {
                test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[name].[md5:hash:hex:8].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'fonts/[name].[md5:hash:hex:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
        }),
        new ExtractTextPlugin(`${file_name}.css`),
    ],
};
