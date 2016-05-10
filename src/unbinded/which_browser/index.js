const isChrome = require('../is_chrome')
const isChromeMobile = require('../is_chrome_mobile')
const isFF = require('../is_firefox')
const isOpera = require('../is_opera')
const isSafari = require('../is_safari')
const isIE = require('../is_ie')

module.exports = function whichBrowser (str) {
  if (isOpera(str)) {
    return 'opera'
  } else if (isChromeMobile(str)) {
    return 'chrome mobile'
  } else if (isChrome(str)) {
    return 'chrome'
  } else if (isFF(str)) {
    return 'firefox'
  } else if (isSafari(str)) {
    return 'safari'
  } else if (isIE(str)) {
    return 'ie'
  } else {
    return undefined
  }
}
