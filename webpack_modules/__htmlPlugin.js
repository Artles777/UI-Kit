const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      fs = require('fs');

const isMinify = () => process.env.NODE_ENV === 'development' ? false : true;

function pages() {
    const html = fs.readdirSync(path.resolve(__dirname, '../src/pages'), {withFileTypes: true})
        .map(item =>
            new HtmlWebpackPlugin({
                title: `${item.name}`,
                filename: `${item.name}.html`,
                template: path.resolve(__dirname, `../src/pages/${item.name}/${item.name}.pug`),
                minify: isMinify(),
                favicon: path.resolve(__dirname, '../src/assets/favicon.ico')
            })
        );
    return html;
}

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loaders: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            ]
        },
        plugins: pages()
            // new HtmlWebpackPlugin({
            //     title: 'Hotel rooms',
            //     filename: 'index/index.html',
            //     template: path.resolve(__dirname, '../src/pages/index/index.pug'),
            //     minify: isMinify(),
            //     favicon: path.resolve(__dirname, '../src/assets/favicon.ico')
            // })

    }
};