const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const isImg = () => process.env.NODE_ENV === 'development' ? 'img/[path][name].[ext]': 'img/[hash]-[name].[ext]';

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: isImg(),
                        publicPath: './',
                        esModule: false
                    }
                }
            ]
        },
        plugins: [
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                        ['gifsicle', { interlaced: true }],
                        ['jpegtran', { progressive: true }],
                        ['optipng', { optimizationLevel: 5 }],
                        [
                            'svgo',
                            {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            }),
        ],
    }
};