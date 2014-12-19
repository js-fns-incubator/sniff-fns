var testString = require('../test_string');

describe('testString', function(){
  it('returns true if string contains test string', function(){
    var target = 'Test string lalalala other stuff';
    var test = 'test';

    var result = testString(target, test);

    expect(result).to.be.true;
  });

  it('returns false if string doesn\'t contains test string', function(){
    var target = 'Test string lalalala other stuff';
    var test = 'wrong';

    var result = testString(target, test);

    expect(result).to.be.false;
  });
});
