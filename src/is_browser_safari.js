var testString = require('./test_string');
var isChrome = require('./is_browser_chrome');
var isAndroid = require('./is_android');

var isSafari = function(str){
  return testString(str, 'safari') && testString(str, 'apple') && !(isChrome(str) && isAndroid(str));
}

module.exports = isSafari;
