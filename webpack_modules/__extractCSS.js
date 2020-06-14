const path = require('path'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      MediaQueryPlugin = require('media-query-plugin');

const isCss = () => process.env.NODE_ENV === 'development' ? '[name].[hash].css' : '[name].bundle.css',
      isCssChunk = () => isCss() === 'development' ? '[id].[hash].css' : '[id].bundle.css';

module.exports = () => {
    return {
        module: {
          rules: [
              {
                  test: /\.scss$/,
                  use: [
                      MiniCssExtractPlugin.loader,
                      'css-loader',
                      MediaQueryPlugin.loader,
                      'postcss-loader',
                      'sass-loader'
                  ]
              },
              {
                  test: /\.css$/,
                  use: [
                      MiniCssExtractPlugin.loader,
                      'css-loader'
                  ]
              }
          ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: isCss(),
                chunkName: isCssChunk()
            }),
            new MediaQueryPlugin({})
        ]
    }
};