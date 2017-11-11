'use strict'

const onSignUpSuccess = function (data) {
  $('.alerts').html('Thank you for signing up!')
}

const onSignUpFailure = function () {
  console.log('Failure')
}

const onSignInSuccess = function (data) {
  $('.alerts').html('Signed In!')
  console.log('Success!')
}

const onSignInFailure = function () {
  console.log('Failure')
}

const onSignOutSuccess = function (data) {
  $('.alerts').html('Signed Out!')
  console.log('Success!')
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
