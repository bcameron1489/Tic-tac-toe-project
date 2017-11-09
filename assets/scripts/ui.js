'use strict'

const onSignUpSuccess = function (data) {
  $('#alerts').html('Thank you for signing up!')
  $('#alerts').css('display', 'block')
}

const onSignUpFailure = function () {
  console.log('Failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
