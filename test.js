require('./src/__tests__/_test_helper')

var testsContext = require.context('./src', true, /_test.js$/)
testsContext.keys().forEach(testsContext)

