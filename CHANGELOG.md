# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning].

This change log follows the format documented in [Keep a CHANGELOG].

[Semantic Versioning]: http://semver.org/
[Keep a CHANGELOG]: http://keepachangelog.com/

## [0.5.3] - 2016-10-14

### Added

- Add `isLinux` function to `whichOs` to support Linux OS detection

## [0.5.2] - 2016-05-16

### Fixed

- Replace `const` with `var` to keep compatibility with old browsers.

## [0.5.0] - 2016-05-11

### Changed

- **BREAKING**: new API:

  - Functions on the top level were replaced with boolean values
    representing the state of the current browser:

    ```js
    sniffFns.isIE
    //=> false

    sniffFns.isChrome
    //=> true
    ```

  - Simplified API: no more `.browser`, no more `sniff-fns/src` in `require`:

    ```diff
    - sniffFns.browser.isIE(navigator.userAgent)
    + sniffFns.isIE

    - var isChrome = require('sniff-fns/src/is_browser_chrome')
    - var isChrome = require('sniff-fns/is_chrome')
    - isChrome(navigator.userAgent)
    + isChrome
    ```

  - To access functions that accepts a user agent string,
    use `lib` namespace:

    ```diff
    - sniffFns.browser.isIE(request.ua)
    + sniffFns.lib.isIE(request.ua)

    - var isIE = require('sniff-fns/src/is_ie_browser')
    + var isIE = require('sniff-fns/lib/is_ie')
    isIE(request.ua)
    ```

  - `isBb10` renamed to `isBlackberry`

  - `whichOs` is now `whichOS`

- *Internal*: new tests suite.

- *Internal*: code refactoring.

### Fixed

- iPad now is not detected as a Mac (`isMac`).

- Updated BlackBerry user agent string patterns.

## [0.4.0] - 2016-05-06

### Added

- Add `isIE` function

- Add `whichBrowserVersion` function which supports Chrome, Mobile Chrome,
  Firefox, IE and Opera.

## [0.1.0] - 2014-12-19

Initial release.

[Unreleased]: https://github.com/js-fns/sniff-fns/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/js-fns/sniff-fns/compare/v0.1.0...v0.4.0
