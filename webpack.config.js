module.exports = (env, argv) => {
    return require(`./_webpack/webpack.${argv.mode}.js`);
};
