var testString = require('./test_string');
var sniffChrome = require('./sniff_browser_chrome');
var sniffAndroid = require('./sniff_android');

var isChromeMobile = function(str){
  return (sniffChrome(str) && sniffAndroid(str)) || testString(str, 'CriOS');
}

module.exports = isChromeMobile;
