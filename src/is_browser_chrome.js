var testString = require('./test_string');
var isEdge = require('./is_browser_edge');

var isChrome = function(str) {
  return testString(str, 'chrome') && !isEdge(str);
}

module.exports = isChrome;
