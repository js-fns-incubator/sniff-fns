// XXX: This file is generated by a script, don't edit it manually.
//      Please see `npm run build-binded-fns` command.
const _isBlackberry = require('../unbinded/is_blackberry')
module.exports = function isBlackberry () {
  return _isBlackberry(navigator.userAgent)
}
