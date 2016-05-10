const path = require('path')
const fs = require('fs')

module.exports = function listFns () {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'unbinded'))
  return files
    .filter((file) => !file.startsWith('.'))
    .map((file) => {
      const unbindedPath = `./src/unbinded/${file}/index.js`
      const bindedPath = unbindedPath.replace('unbinded', 'binded')
      return {
        name: camelize(file),
        bindedPath,
        unbindedPath
      }
    })
}

function camelize (str) {
  return str
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word
      } else if (word === 'os') {
        return 'OS'
      } else if (word === 'ie') {
        return 'IE'
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join('')
}
