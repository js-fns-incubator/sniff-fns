// # TODO: Find a better place for it
// window.sniffedInformation = do ->
//   userAgent = navigator.userAgent.toLowerCase()
//   testUserAgent = (str) -> RegExp(str.toLowerCase()).test(userAgent)

//   android = if testUserAgent('android')
//     parseFloat(userAgent.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) or true
//   else
//     false
//   mobileAndroid = android and testUserAgent('mobile')

//   windowsPhone = if testUserAgent('windows phone') or testUserAgent('iemobile')
//     parseFloat(userAgent.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) or true
//   else
//     false

//   isChrome = testUserAgent('chrome')
//   isBb10 = testUserAgent('bb10')
//   isIPhone = testUserAgent('iphone;') or testUserAgent('ipod touch;')

//   android: android
//   mobileAndroid: mobileAndroid
//   browser:
//     bb10: isBb10
//     chrome: isChrome
//     firefox: testUserAgent('firefox')
//     opera: testUserAgent('opera')
//     safari: testUserAgent('safari') and testUserAgent('apple') and not isChrome and not testUserAgent('android')
//   iPhone: isIPhone
//   iPad: testUserAgent('ipad;')
//   mac: testUserAgent('mac os')
//   windowsPhone: windowsPhone
//   mobile: mobileAndroid or isIPhone or windowsPhone or isBb10
return true;
