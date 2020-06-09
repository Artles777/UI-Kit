const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
    return {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist'), force: true }
                ]
            })
        ]
    }
};