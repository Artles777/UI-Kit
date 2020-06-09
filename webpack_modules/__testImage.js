const isImg = () => process.env.NODE_ENV === 'development' ? 'img/[path][name].[ext]': 'img/[hash].[ext]';

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: isImg(),
                        publicPath: '../',
                        esModule: false
                    }
                }
            ]
        }
    }
};