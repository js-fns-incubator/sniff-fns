const fsp = require('fs-promise')
const path = require('path')
const listFns = require('./_lib/list_fns')

const indexLines = [
  "// XXX: This file is generated by a script, don't edit it manually.",
  '//      Please see `npm run build-index` command.',
  'var sniffFns = {lib: {}}',
  'module.exports = sniffFns'
]

listFns().forEach((fn) => {
  indexLines.push(`sniffFns.${fn.name} = require('${fn.bindedPath}')`)
  indexLines.push(`sniffFns.lib.${fn.name} = require('${fn.unboundPath}')`)
})

fsp.writeFile(path.join(process.cwd(), 'index.js'), `${indexLines.join('\n')}\n`)
