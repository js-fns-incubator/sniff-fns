// Browsers
var isChrome = require('./is_browser_chrome');
var isChromeMobile = require('./is_browser_chrome_mobile');
var isFF = require('./is_browser_firefox');
var isOpera = require('./is_browser_opera');
var isSafari = require('./is_browser_safari');
var isIE = require('./is_browser_ie');
var whichBrowser = require('./which_browser');
var whichBrowserVersion = require('./which_browser_version');

// OSes
var isAndroid = require('./is_android');
var isAndroidMobile = require('./is_android_mobile');
var isBB = require('./is_blackberry');
var isIphone = require('./is_iphone');
var isIpad = require('./is_ipad');
var isMac = require('./is_mac');
var isWindows = require('./is_windows');
var isWP = require('./is_windows_phone');
var isMobile = require('./is_mobile');
var whichOs = require('./which_os');

var sniffFns = {
    isAndroid: isAndroid,
    isMobileAndroid: isAndroidMobile,
    isBb10: isBB,
    browser: {
      isChrome: isChrome,
      isChromeMobile: isChromeMobile,
      isFirefox: isFF,
      isOpera: isOpera,
      isSafari: isSafari,
      isIE: isIE,
      whichBrowser: whichBrowser,
      whichBrowserVersion: whichBrowserVersion
    },
    isIphone: isIphone,
    isIpad: isIpad,
    isMac: isMac,
    isWindows: isWindows,
    isWindowsPhone: isWP,
    isMobile: isMobile,
    whichOs: whichOs
}

module.exports = sniffFns;
