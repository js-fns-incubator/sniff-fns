# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning].

This change log follows the format documented in [Keep a CHANGELOG].

[Semantic Versioning]: http://semver.org/
[Keep a CHANGELOG]: http://keepachangelog.com/

## [Unreleased]

### Changed

- **BREAKING**: functions previously accessible via `sniffFns.browser`
  (`isChrome`, `isIE`, etc.; 8 functions in total)
  now could be accessed via just `sniffFns`:

  ```diff
  - sniffFns.browser.isIE(navigator.userAgent)
  + sniffFns.isIE()
  ```

- **BREAKING**: before `v1.0.0` all functions were accepting an one argument:
  a user agent string. Now all the functions use `navigator.userAgent`,
  while unbinded functions still accessible
  via `sniffFns.lib` or `sniff-fns/lib`:

  ```diff
  // Get rid of `navigator.userAgent`
  - sniffFns.browser.isIE(navigator.userAgent)
  + sniffFns.isIE()

  // Use sniff-fns/lib/is_ie instead of sniff-fns/is_ie
  // to be able to pass a custom user agent string.
  - var isIE = require('sniff-fns/src/isIE')
  + var isIE = require('sniff-fns/lib/isIE')
  isIE(request.ua)
  ```

## [0.4.0] - 2016-05-06

### Added

- Add `isIE` function

- Add `whichBrowserVersion` function which supports Chrome, Mobile Chrome,
  Firefox, IE and Opera.

## [0.1.0] - 2014-12-19

Initial release.

[Unreleased]: https://github.com/js-fns/sniff-fns/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/js-fns/sniff-fns/compare/v0.1.0...v0.4.0
