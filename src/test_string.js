/**
 * Test string if it contains other string
 * @param  {string} str
 * @param  {string} test
 * @returns {boolean}
 */
var testString = function(str, test){
  return RegExp(test.toLowerCase()).test(str.toLowerCase())
}

module.exports = testString;
