const path = require('path')

module.exports = {
  entry: {
    'sniff_fns': path.join(process.cwd(), 'index.js')
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
    library: 'sniffFns',
    libraryTarget: 'umd'
  }
}
