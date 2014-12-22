var testString = require('./test_string');
var isChrome = require('./is_browser_chrome');
var isAndroid = require('./is_android');

var isChromeMobile = function(str){
  return (isChrome(str) && isAndroid(str)) || testString(str, 'CriOS');
}

module.exports = isChromeMobile;
