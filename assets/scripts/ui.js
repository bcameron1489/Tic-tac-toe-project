'use strict'
const store = require

const onSignUpSuccess = function (data) {
  $('.alerts').html('Thank you for signing up!')
  console.log(data)
}

const onSignUpFailure = function () {
  console.log('Failure')
}

const onSignInSuccess = function (data) {
  $('.alerts').html('Signed In!')
  console.log(data)
}

const onSignInFailure = function () {
  console.log('Failure')
}

const onSignOutSuccess = function () {
  $('.alerts').html('Signed Out!')
  console.log('Success!')
  store.user = null
}

const onSignOutFailure = function () {
  console.log('Failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
