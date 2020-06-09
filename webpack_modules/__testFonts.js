const isFont = () => process.env.NODE_ENV === 'development' ? 'fonts/[path][name].[ext]': 'fonts/[hash].[ext]';

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: 'file-loader',
                    options: {
                        name: isFont(),
                        publicPath: '../',
                        esModule: false
                    }
                }
            ]
        }
    }
}