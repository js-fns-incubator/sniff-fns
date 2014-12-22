var testString = require('./test_string');
var sniffAndroid = require('./is_android');

var isAndroidMobile = function(str){
  return sniffAndroid(str) && testString(str, 'mobile');
}

module.exports = isAndroidMobile;
