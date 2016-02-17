var sniffFns = require('../sniff_fns');

describe('bundle sniffFns', function () {
  it('returns object with functions', function () {
    var keys = [
      "isAndroid",
      "isMobileAndroid",
      "isBb10",
      "browser",
      "isIphone",
      "isIpad",
      "isMac",
      "isWindows",
      "isWindowsPhone",
      "isMobile",
      "whichOs"
    ];

    expect(Object.keys(sniffFns)).is.eql(keys);
  });
});
