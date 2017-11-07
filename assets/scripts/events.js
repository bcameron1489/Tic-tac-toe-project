const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.OnSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  addHandlers,
  onSignUp
}
