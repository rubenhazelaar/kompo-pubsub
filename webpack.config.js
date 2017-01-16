const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
    entry: {},
    output: {
        filename: '[name].min.js'
    },
    plugins: [
        new BabiliPlugin({
            comments: false
        })
    ]
};