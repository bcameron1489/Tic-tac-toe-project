'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const main = require('./main')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
$(() => {
  events.addHandlers()
})
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  main.tileSelect()
})
