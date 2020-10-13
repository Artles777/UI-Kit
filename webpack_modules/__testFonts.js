const isFont = () => process.env.NODE_ENV === 'development'
    ? '[path][name].[ext]'
    : 'fonts/[name].[ext]?[hash]';

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: 'file-loader',
                    options: {
                        name: isFont(),
                        publicPath: './',
                        esModule: false
                    }
                }
            ]
        }
    }
}