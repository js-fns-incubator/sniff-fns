var isChrome = require('./is_browser_chrome');
var isChromeMobile = require('./is_browser_chrome_mobile');
var isAndroid = require('./is_android');
var isAndroidMobile = require('./is_android_mobile');
var isBB = require('./is_blackberry');
var isFF = require('./is_browser_firefox');
var isOpera = require('./is_browser_opera');
var isSafari = require('./is_browser_safari');
var isIphone = require('./is_iphone');
var isIpad = require('./is_ipad');
var isMac = require('./is_mac');
var isWP = require('./is_windows_phone');
var isMobile = require('./is_mobile');

var sniffFns = {
    android: isAndroid,
    mobileAndroid: isAndroidMobile,
    bb10: isBB,
    browser: {
      chrome: isChrome,
      chromeMobile: isChromeMobile,
      firefox: isFF,
      opera: isOpera,
      safari: isSafari
    },
    iPhone: isIphone,
    iPad: isIpad,
    mac: isMac,
    windowsPhone: isWP,
    mobile: isMobile
}

module.exports = sniffFns;
