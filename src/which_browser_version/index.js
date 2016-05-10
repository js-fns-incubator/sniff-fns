const whichBrowser = require('../which_browser')

module.exports = function whichBrowserVersion (str) {
  var capturedVersion
  switch (whichBrowser(str)) {
    case 'chrome':
      capturedVersion = str.match(/Chrome\/(\d+)\./)
      return capturedVersion ? parseInt(capturedVersion[1]) : undefined

    case 'chrome mobile':
      capturedVersion = str.match(/(?:Chrome|CriOS)\/(\d+)\./)
      return capturedVersion ? parseInt(capturedVersion[1]) : undefined

    case 'firefox':
      capturedVersion = str.match(/Firefox\/(\d+)\./)
      return capturedVersion ? parseInt(capturedVersion[1]) : undefined

    case 'ie':
      capturedVersion = str.match(/MSIE\s(\d+)\./)
      if (capturedVersion) {
        return parseInt(capturedVersion[1])
      } else {
        return /Trident\/7/.test(str) ? 11 : undefined
      }

    case 'safari':
      capturedVersion = str.match(/Version\/(\d+)\./)
      if (capturedVersion) {
        return parseInt(capturedVersion[1])
      } else {
        capturedVersion = str.match(/Safari\/(\d+)\./)
        if (capturedVersion) {
          return parseInt(capturedVersion[1]) < 412 ? 1 : 2
        } else {
          return undefined
        }
      }

    case 'opera':
      capturedVersion = str.match(/Version\/(\d+)\./)
      return capturedVersion ? parseInt(capturedVersion[1]) : undefined

    default:
      return undefined
  }
}
