var path = require('path');

var config = {
  cache: true,
  entry: {
    'sniff_fns': './src/sniff_fns.js'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    library: 'sniffFns',
    libraryTarget: 'umd'
  }
};

module.exports = config;

