const path = require('path'),
      fs = require('fs');

function openPage() {
    const html = fs.readdirSync(path.resolve(__dirname, '../src/pages'), {withFileTypes: true})
        .map(item => `${item.name}/${item.name}.html`);
    return html;
}

module.exports = () => {
  return {
      devServer: {
          contentBase: path.resolve(__dirname, 'dist'),
          stats: 'errors-only',
          // historyApiFallback: true,
          index: 'index/index.html',
          hot: true,
          compress: true,
          open: true,
          port: 4000,
          writeToDisk: true,
          openPage: openPage()
      }
  }
};