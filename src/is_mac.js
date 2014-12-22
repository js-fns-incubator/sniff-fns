var testString = require('./test_string')

var isMac = function(str){
  return testString(str, 'mac os')
};

module.exports = isMac;

