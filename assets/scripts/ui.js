'use strict'

const onSignUpSuccess = function (data) {
  $('.alerts').html('Thank you for signing up!')
  $('.alerts').css('display', 'block')
}

const onSignUpFailure = function () {
  console.log('Failure')
}

const onSignInSuccess = function (data) {
  $('.alerts').html('Signed In!')
  $('.alerts').css('display', 'block')
  console.log('Success!')
}

const onSignInFailure = function () {
  console.log('Failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
