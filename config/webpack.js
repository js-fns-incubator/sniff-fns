var path = require('path');

var config = {
  cache: true,
  entry: {
    // 'sniff_fns': 'src/sniff_fns.js',
    // 'sniff_fns_global': './src/sniff_fns_global.js'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js'
  }
};

module.exports = config;

