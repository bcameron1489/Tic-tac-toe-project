// turn game logic

const tileSelect = function () {
  const gameInfo = {
    turn: (0)
  // moves: (0)
  }
  // alternate turns
  const takeTurns = function () {
    $('.game-piece').on('click', function (event) {
      if (gameInfo.turn % 2 === 0) {
        $(this).html('X')
      } else if
      (gameInfo.turn % 2 === 1) {
        $(this).html('O')
      } else {
        console.log('gameover')
      }

      gameInfo.turn += 1
    })
  }
  const checkWinner = function () {
    const showWinner = $('.winner')
    $('.game-piece').click(function (event) {
      const sq0 = $('#tile-zero').html()
      const sq1 = $('#tile-one').html()
      const sq2 = $('#tile-two').html()
      const sq3 = $('#tile-three').html()
      const sq4 = $('#tile-four').html()
      const sq5 = $('#tile-five').html()
      const sq6 = $('#tile-six').html()
      const sq7 = $('#tile-seven').html()
      const sq8 = $('#tile-eight').html()

      if (sq0 !== '' & sq0 === sq1 & sq1 === sq2) {
        return $(showWinner).html(sq0 + ' Wins')
      } else if (sq3 !== '' & sq3 === sq4 & sq4 === sq5) {
        return $(showWinner).html(sq3 + ' Wins')
      } else if (sq6 !== '' & sq6 === sq7 & sq7 === sq8) {
        return $(showWinner).html(sq6 + ' Wins')
      } else if (sq0 !== '' & sq0 === sq3 & sq3 === sq6) {
        return $(showWinner).html(sq0 + ' Wins')
      } else if (sq1 !== '' & sq1 === sq4 & sq4 === sq7) {
        return $(showWinner).html(sq1 + ' Wins')
      } else if (sq2 !== '' & sq2 === sq5 & sq5 === sq8) {
        return $(showWinner).html(sq2 + ' Wins')
      } else if (sq0 !== '' & sq0 === sq4 & sq4 === sq8) {
        return $(showWinner).html(sq0 + ' Wins')
      } else if (sq6 !== '' & sq6 === sq4 & sq4 === sq2) {
        return $(showWinner).html(sq6 + ' Wins')
      } else { // no winner so return "false"
        return false
      }
    })
  }
  takeTurns()
  checkWinner()
  // display turn
  const gameBoard = $('.turn')
  $('#game-grid').click(function () {
    if (gameInfo.turn === 9) {
      $(gameBoard).html('Tie!')
    } else if
    (gameInfo.turn % 2 === 1) {
      $(gameBoard).html('Player 2\'s Turn!')
    } else {
      $(gameBoard).html('Player 1\'s Turn!')
    }
  })
}
module.exports = {
  tileSelect
}
