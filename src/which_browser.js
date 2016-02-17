var isChrome = require('./is_browser_chrome');
var isChromeMobile = require('./is_browser_chrome_mobile');
var isFF = require('./is_browser_firefox');
var isOpera = require('./is_browser_opera');
var isSafari = require('./is_browser_safari');

var whichBrowser = function (str) {
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
  } else {
    return 'unknown browser'
  }
};

module.exports = whichBrowser;
