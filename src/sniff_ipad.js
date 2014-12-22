var testString = require('./test_string')

var isIpad = function(str){
  return testString(str, 'ipad;')
};

module.exports = isIpad;

