var testString = require('./test_string');

var isEdge = function(str) {
  return testString(str, 'edge');
}

module.exports = isEdge;
