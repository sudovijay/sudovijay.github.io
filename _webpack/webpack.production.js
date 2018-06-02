const webpack = require('webpack'); // eslint-disable-line
const Merge = require('webpack-merge'); // eslint-disable-line
const path = require('path');
const glob = require('glob-all'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line
const PurgecssPlugin = require('purgecss-webpack-plugin'); // eslint-disable-line
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // eslint-disable-line

const CommonConfig = require('./webpack.common.js');

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g); /* eslint-disable-line */
    }
}

const pathsToClean = ['build'];

const cleanOptions = {
    root: path.join(process.cwd(), '/public/'),
    verbose: true,
    dry: false,
};

module.exports = Merge(CommonConfig, {
    plugins: [
        new PurgecssPlugin({
            paths: glob.sync([path.join(process.cwd(), '/public/*.html')], { nodir: true }),
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['html', 'js', 'php'],
                },
            ],
        }),

        new CleanWebpackPlugin(pathsToClean, cleanOptions),

        // new BundleAnalyzerPlugin(),
    ],
});
