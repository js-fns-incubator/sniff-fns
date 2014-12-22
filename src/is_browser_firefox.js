var testString = require('./test_string');

var isFirefox = function(str){
  return testString(str, 'firefox');
}

module.exports = isFirefox;
