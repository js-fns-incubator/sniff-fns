var whichBrowser = require('./which_browser');

var whichBrowserVersion = function (str) {
  var capturedVersion
  switch (whichBrowser(str)) {
    case 'chrome':
      capturedVersion = str.match(/Chrome\/(\d+)\./);
      return capturedVersion ? parseInt(capturedVersion[1]) : null;

    case 'chrome mobile':
      capturedVersion = str.match(/(?:Chrome|CriOS)\/(\d+)\./);
      return capturedVersion ? parseInt(capturedVersion[1]) : null;

    case 'firefox':
      capturedVersion = str.match(/Firefox\/(\d+)\./);
      return capturedVersion ? parseInt(capturedVersion[1]) : null;

    case 'ie':
      capturedVersion = str.match(/MSIE\s(\d+)\./);
      if (capturedVersion) {
        return parseInt(capturedVersion[1]);
      } else {
        return /Trident\/7/.test(str) ? 11 : null;
      }

    case 'safari':
      capturedVersion = str.match(/Version\/(\d+)\./);
      if (capturedVersion) {
        return parseInt(capturedVersion[1]);
      } else {
        capturedVersion = str.match(/Safari\/(\d+)\./);
        if (capturedVersion) {
          return parseInt(capturedVersion[1]) < 412 ? 1 : 2;
        } else {
          return null
        }
      }

    case 'opera':
      capturedVersion = str.match(/Version\/(\d+)\./);
      return capturedVersion ? parseInt(capturedVersion[1]) : null;

    default:
      return null
  }
};

module.exports = whichBrowserVersion;
