var sniffFns = require('../sniff_fns');

describe('bundle sniffFns', function(){
  it('returns object with functions', function(){
    var keys = ["android", "mobileAndroid", "bb10", "browser", "iPhone", "iPad", "mac", "windowsPhone", "mobile"];

    expect(Object.keys(sniffFns)).is.eql(keys);
  });
});
