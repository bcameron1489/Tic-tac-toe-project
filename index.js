'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

const sqOne = document.getElementById('position-one')
const sqTwo = document.getElementById('position-two')
const sqThree = document.getElementById('position-three')
const sqFour = document.getElementById('position-four')
const sqFive = document.getElementById('position-five')
const sqSix = document.getElementById('position-six')
const sqSeven = document.getElementById('position-seven')
const sqEight = document.getElementById('position-eight')
const sqNine = document.getElementById('position-nine')

sqOne.addEventListener('click', function () {
  console.log('testing postition 1')
})

sqTwo.addEventListener('click', function () {
  console.log('testing postition 2')
})

sqThree.addEventListener('click', function () {
  console.log('testing postition 3')
})

sqFour.addEventListener('click', function () {
  console.log('testing postition 4')
})

sqFive.addEventListener('click', function () {
  console.log('testing postition 5')
})

sqSix.addEventListener('click', function () {
  console.log('testing postition 6')
})

sqSeven.addEventListener('click', function () {
  console.log('testing postition 7')
})

sqEight.addEventListener('click', function () {
  console.log('testing postition 8')
})

sqNine.addEventListener('click', function () {
  console.log('testing postition 9')
})
