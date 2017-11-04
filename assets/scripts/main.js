const grid = {
  sqOne: document.getElementById('position-one'),
  sqTwo: document.getElementById('position-two'),
  sqThree: document.getElementById('position-three'),
  sqFour: document.getElementById('position-four'),
  sqFive: document.getElementById('position-five'),
  sqSix: document.getElementById('position-six'),
  sqSeven: document.getElementById('position-seven'),
  sqEight: document.getElementById('position-eight'),
  sqNine: document.getElementById('position-nine')
}
const addHandlers = function () {
// event listeners for visual aid
  grid.sqOne.addEventListener('click', function () {
    console.log('testing postition 1')
  })
// trim the fat here... can i use 1 event handler for click.
  grid.sqTwo.addEventListener('click', function () {
    console.log('testing postition 2')
  })

  grid.sqThree.addEventListener('click', function () {
    console.log('testing postition 3')
  })

  grid.sqFour.addEventListener('click', function () {
    console.log('testing postition 4')
  })

  grid.sqFive.addEventListener('click', function () {
    console.log('testing postition 5')
  })

  grid.sqSix.addEventListener('click', function () {
    console.log('testing postition 6')
  })

  grid.sqSeven.addEventListener('click', function () {
    console.log('testing postition 7')
  })

  grid.sqEight.addEventListener('click', function () {
    console.log('testing postition 8')
  })

  grid.sqNine.addEventListener('click', function () {
    console.log('testing postition 9')
  })

  // jquery
  $('').on('click', function (event) {
    $().html('X')
  })
}

module.exports = {
  addHandlers
}
