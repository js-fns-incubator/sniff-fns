var isChrome = require('./sniff_browser_chrome');
var isChromeMobile = require('./sniff_browser_chrome_mobile');
var isAndroid = require('./sniff_android');
var isAndroidMobile = require('./sniff_android_mobile');
var isBB = require('./sniff_blackberry');
var isFF = require('./sniff_browser_firefox');
var isOpera = require('./sniff_browser_opera');
var isSafari = require('./sniff_browser_safari');
var isIphone = require('./sniff_iphone');
var isIpad = require('./sniff_ipad');
var isMac = require('./sniff_mac');
var isWP = require('./sniff_windows_phone');
var isMobile = require('./sniff_mobile');

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
