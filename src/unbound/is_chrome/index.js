var isEdge = require('../is_edge')

module.exports = function isChrome (str) {
  return /chrome/i.test(str) && !isEdge(str)
}
