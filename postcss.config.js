const path = require('path');

const isMap = () => isEnv() === 'development' ? 'inline' : false;

module.exports = {
    to: path.resolve(__dirname, 'dist'),
    from: path.resolve((__dirname, './src/style/style.scss')),
}