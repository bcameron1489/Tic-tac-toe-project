/*    not needed due to jquery
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
*/

// event listeners for visual aid - commented out, obsolete due to jquery
/*
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
*/
// jquery

const addHandler = function () {
  const gameInfo = {
  //  playerOne: ('X')         use later
  //  playerTwo: ('O')            ||
    turn: (0)
  //  moves: (0)
  }
  gameInfo.turn = 0
  $('.game-piece').click(function () {
    if (gameInfo.turn % 2 === 0) {
      $(this).html('X')
    } else {
      $(this).html('O')
    }
    gameInfo.turn += 1
  })
}

module.exports = {
  addHandler
}
