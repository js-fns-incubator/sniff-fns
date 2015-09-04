var path = require('path');
var isTest = process.env.NODE_ENV == 'test';

var config = {
  cache: true,
  entry: isTest ? {} : {
    'sniff_fns': './src/sniff_fns.js'
  },
  output: isTest ? {path: '/'} : {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    library: 'sniffFns',
    libraryTarget: 'umd'
  }
};

module.exports = config;

