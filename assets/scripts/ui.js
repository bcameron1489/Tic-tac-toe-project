'use strict'
const store = require('./store')
const main = require('./main')
// Success & Failure message display on Sign up
const onSignUpSuccess = function (data) {
  $('.alerts').html('Thank you for signing up!')
  $('#sign-up').hide()
  console.log(data)
}

const onSignUpFailure = function () {
  console.log('Failure')
}
// Success & Failure message display on Sign in + store user data
const onSignInSuccess = function (data) {
  $('.alerts').html('Signed In!')
  $('.hide-body').show()
  $('.hide-sign-forms').hide()
  $('.show-login').hide()
  $('#sign-out').show()
  store.user = data.user
}

const onSignInFailure = function () {
  console.log('Failure')
}
// Success & Failure message display on Sign out
const onSignOutSuccess = function () {
  $('.alerts').html('Signed Out!')
  $('.show-login').show()
  $('#sign-out').hide()
  $('#change-password').hide()
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

const createGameSuccess = function (data) {
  main.tileSelect()
  store.game = data.game
  $('.alerts').html('New game created!')
  $('.winner').html('')
  $('.new-game').hide()
}

const createGameFailure = function () {
  $('.alerts').html('Failed to create new game')
}

const updateGameSuccess = function (data) {
  store.game = data.game
  console.log(data)
}

const updateGameFailure = function () {
  $('.alerts').html('Failed to update game')
}

const gameIndexSuccess = function (data) {
  $('.alerts').html('You have played ' + data.games.length + ' games')
/*  setTimeout(function () {
    $('.alerts').fadeOut('fast')
  }, 10000) */
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameIndexSuccess
}
