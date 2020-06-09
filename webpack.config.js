'use strict';

// Modules for all build
const path = require('path'),
      webpack = require('webpack'),
      merge = require('webpack-merge');

// Modules for plugin the webpack-merge
const HtmlPlugin = require('./webpack_modules/__htmlPlugin'),
      ExtractCss = require('./webpack_modules/__extractCSS'),
      DevServer = require('./webpack_modules/__devServer'),
      Fonts = require('./webpack_modules/__testFonts'),
      Image = require('./webpack_modules/__testImage'),
      Babel = require('./webpack_modules/__testBabel'),
      SourceMap = require('./webpack_modules/__testMap'),
      CleanPlugin = require('./webpack_modules/__cleanPlugin');

//It is flags for module.exports
const isEnv = () => process.env.NODE_ENV === 'development' ? 'development' : 'production',
      isTool = () => process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'hidden-source-map',
      isOut = () => process.env.NODE_ENV === 'development' ? '[name].[hash].js' : '[name].bundle.js';

//Minimization path for plugin the path
const PATHS = {
    src: path.resolve(__dirname, 'scr'),
    desc: {
        font: path.resolve(__dirname, 'src/font'),
        img: path.resolve(__dirname, 'src/img'),
        pages: path.resolve(__dirname, 'src/pages'),
        style: path.resolve(__dirname, 'src/img')
    }
};

module.exports = merge([
    {
        devtool: isTool(),
        mode: isEnv(),
        entry: {
            main: `${path.resolve(__dirname, 'src/js')}/index.js`
        },
        output: {
            filename: isOut(),
            path: path.resolve(__dirname, 'dist')
        }
    },
    HtmlPlugin(),
    ExtractCss(),
    DevServer(),
    CleanPlugin(),
    SourceMap(),
    Babel(),
    Image(),
    Fonts()
]);