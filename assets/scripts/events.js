const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const store = require('./store')
/* ---- Auth/Game Events ---- */
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
// Sign In function
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
// Sign Out function
const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
// Change Password function
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Changed Password!')
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  api.updateGame(store.currentGameState)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGameIndex = function (event) {
  event.preventDefault()
  api.gameIndex()
    .then(ui.gameIndexSuccess)
    .catch(ui.gamefailure)
}

/* ---- Show/Hide Forms ---- */

const hideBody = function () {
  $('.hide-body').hide()
}

hideBody()

const hideButtons = function () {
  $('.buttons').hide()
  $('#sign-out').hide()
}

hideButtons()

const showButtons = function () {
  $('.show-login').on('click', function () {
    $('.buttons').show()
    $('.hide-sign-forms').show()
    hideBody()
  })
}

const hideLogin = function () {
  $('.show-login').on('click', function () {
    $('.show-login').hide()
  })
}

hideLogin()

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#create-game').on('submit', onCreateGame)
  $('#game-index').on('submit', onGameIndex)
}

module.exports = {
  addHandlers,
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  onCreateGame,
  onUpdateGame,
  onGameIndex,
  showButtons
}
