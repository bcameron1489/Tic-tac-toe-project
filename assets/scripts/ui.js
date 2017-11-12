'use strict'
const store = require('./store')
// Success & Failure message display on Sign up
const onSignUpSuccess = function (data) {
  $('.alerts').html('Thank you for signing up!')
  console.log(data)
}

const onSignUpFailure = function () {
  console.log('Failure')
}
// Success & Failure message display on Sign in + store user data
const onSignInSuccess = function (data) {
  $('.alerts').html('Signed In!')
  console.log(data)
  store.user = data.user
}

const onSignInFailure = function () {
  console.log('Failure')
}
// Success & Failure message display on Sign out
const onSignOutSuccess = function () {
  $('.alerts').html('Signed Out!')
  console.log('Success!')
  store.user = null
}

const onSignOutFailure = function () {
  console.log('Failure')
}
// Success & Failure message display on Change Password
const changePasswordSuccess = function () {
  $('.alerts').html('Changed Password!')
  console.log('Success!')
}

const changePasswordFailure = function () {
  console.log('Failure!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
