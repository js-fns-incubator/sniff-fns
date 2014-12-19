var testString = require('./test_string');

var isOpera = function(str){
  return testString(str, 'OPR/') || testString(str, 'opera');
}

module.exports = isOpera;

