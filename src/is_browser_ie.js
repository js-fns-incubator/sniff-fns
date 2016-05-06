var testString = require('./test_string');

var isIE = function(str){
  return testString(str, 'MSIE') || // Common IE pattern
    testString(str, 'Trident/7'); // IE11
}

module.exports = isIE;
