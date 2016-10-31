var isLinux = require('../is_linux')
var isLinuxCentos = require('../is_linux_centos')
var isLinuxDebian = require('../is_linux_debian')
var isLinuxFedora = require('../is_linux_fedora')
var isLinuxGentoo = require('../is_linux_gentoo')
var isLinuxRedHat = require('../is_linux_red_hat')
var isLinuxUbuntu = require('../is_linux_ubuntu')

module.exports = function whichLinuxDistro (str) {
  if (isLinuxCentos(str)) {
    return 'linux centos'
  } else if (isLinuxDebian(str)) {
    return 'linux debian'
  } else if (isLinuxFedora(str)) {
    return 'linux fedora'
  } else if (isLinuxGentoo(str)) {
    return 'linux gentoo'
  } else if (isLinuxRedHat(str)) {
    return 'linux red hat'
  } else if (isLinuxUbuntu(str)) {
    return 'linux ubuntu'
  } else if (isLinux(str)) {
    return 'linux'
  } else {
    return undefined
  }
}
