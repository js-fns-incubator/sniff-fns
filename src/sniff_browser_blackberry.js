var testString = require('./test_string');

var isBB = function(str){
  return testString(str, 'bb10');
}

module.exports = isBB;
