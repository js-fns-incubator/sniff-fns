var isChrome = require('../is_chrome')
var isChromeMobile = require('../is_chrome_mobile')
var isFF = require('../is_firefox')
var isOpera = require('../is_opera')
var isSafari = require('../is_safari')
var isIE = require('../is_ie')
var isEdge = require('../is_edge')

module.exports = function whichBrowser (str) {
  if (isOpera(str)) {
    return 'opera'
  } else if (isChromeMobile(str)) {
    return 'chrome mobile'
  } else if (isChrome(str)) {
    return 'chrome'
  } else if (isFF(str)) {
    return 'firefox'
  } else if (isEdge(str)) {
    return 'edge'
  } else if (isSafari(str)) {
    return 'safari'
  } else if (isIE(str)) {
    return 'ie'
  } else {
    return undefined
  }
}
