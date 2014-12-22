var testString = require('./test_string');

var isChrome = function(str){
  return testString(str, 'chrome');
}

module.exports = isChrome;
