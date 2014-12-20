var testString = require('./test_string')

var isIphone = function(str){
  return testString(str, 'iphone;') || testString(str, 'ipod touch;')
};

module.exports = isIphone;

