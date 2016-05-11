const path = require('path')
const fsp = require('fs-promise')
const globp = require('glob-promise')

const packagePath = path.join(process.cwd(), 'tmp', 'npm')
const srcPath = path.join(process.cwd(), 'src')

fsp.remove(packagePath)
  .then(createPackageDirs)
  .then(copyPackageJSON)
  .then(copyUnbinded)
  .then(copyBinded)
  .then(copyIndex)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

function createPackageDirs() {
  return fsp.mkdirp(path.join(packagePath, 'lib'))
}

function copyPackageJSON() {
  return fsp.copy(
    path.join(process.cwd(), 'package.json'),
    path.join(packagePath, 'package.json')
  )
}

function copyUnbinded() {
  return globp(path.join(srcPath, 'unbinded', '*'))
    .then((fnPaths) => {
      return Promise.all(fnPaths.map((fnPath) => {
        const fnFileName = fnPath.match(/\/(\w+)$/)[1]
        return fsp.copy(fnPath, path.join(packagePath, 'lib', fnFileName))
      }))
    })
}

function copyBinded() {
  return globp(path.join(srcPath, 'binded', '*'))
    .then((fnPaths) => {
      return Promise.all(fnPaths.map((fnPath) => {
        const fnFileName = fnPath.match(/\/(\w+)$/)[1]
        const bindedFnDirPath = path.join(packagePath, fnFileName)
        const bindedFnPath = path.join(bindedFnDirPath, 'index.js')

        return fsp.copy(fnPath, bindedFnDirPath)
          .then(() => fsp.readFile(bindedFnPath))
          .then((contentStream) => {
            const content = contentStream.toString()
            const adjustedContent = content.replace('../../unbinded', '../lib')
            return fsp.writeFile(bindedFnPath, adjustedContent)
          })
      }))
    })
}

function copyIndex() {
  const packageIndexPath = path.join(packagePath, 'index.js')
  return fsp.copy(
    path.join(process.cwd(), 'index.js'),
    packageIndexPath
  )
    .then(() => {
      return fsp.readFile(packageIndexPath)
        .then((contentStream) => {
          const content = contentStream.toString()
          const adjustedContent = content
            .replace(/\.\/src\/binded/g, '.')
            .replace(/\.\/src\/unbinded/g, './lib')
          return fsp.writeFile(packageIndexPath, adjustedContent)
        })
    })
}
