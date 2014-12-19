var testString = require('./test_string');
var sniffAndroid = require('./sniff_android');

var isMobileAndroid = function(str){
  return sniffAndroid(str) && testString(str, 'mobile');
}

module.exports = isMobileAndroid;
