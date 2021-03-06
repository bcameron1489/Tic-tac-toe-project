// turn game logic
const disable = function () {
  $('.game-piece').off('click')
}

const clearBoard = function () {
  $('.game-piece').html('')
}

const tileSelect = function () {
  const gameInfo = {
    turn: (0)
  }

  const turnReset = function () {
    $(gameBoard).html('Player 1\'s Turn!')
  }

  const showNewGame = function () {
    $('.new-game').show()
  }
  // give variable to the class which shows turn
  const gameBoard = $('.turn')

  // alternate turns first by checking if the cell has been taken already
  // then run an if statement checking modulus for turn x = 0 / O = 1
  const takeTurns = function () {
    $('.game-piece').on('click', function (event) {
      if ($(this).html() === 'X' || $(this).html() === 'O') {
        $(gameBoard).html('Pick again!')
        return null
      } else if (gameInfo.turn % 2 === 0) {
        $(this).html('X')
        $(gameBoard).html('Player 2\'s Turn!')
      } else if (gameInfo.turn % 2 === 1) {
        $(this).html('O')
        $(gameBoard).html('Player 1\'s Turn!')
      } else {
        return null
      }
      gameInfo.turn += 1
    })
  }

  // function containing the html properties of each cell
  // it then runs if statement by checking to make sure the cell is not empty
  // if the statement results in true return x or o and 'Wins'/else return false
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
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html(sq0 + ' Wins')
      } else if (sq3 !== '' & sq3 === sq4 & sq4 === sq5) {
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html(sq3 + ' Wins')
      } else if (sq6 !== '' & sq6 === sq7 & sq7 === sq8) {
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html(sq6 + ' Wins')
      } else if (sq0 !== '' & sq0 === sq3 & sq3 === sq6) {
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html(sq0 + ' Wins')
      } else if (sq1 !== '' & sq1 === sq4 & sq4 === sq7) {
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html(sq1 + ' Wins')
      } else if (sq2 !== '' & sq2 === sq5 & sq5 === sq8) {
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html(sq2 + ' Wins')
      } else if (sq0 !== '' & sq0 === sq4 & sq4 === sq8) {
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html(sq0 + ' Wins')
      } else if (sq6 !== '' & sq6 === sq4 & sq4 === sq2) {
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html(sq6 + ' Wins')
      } else if (gameInfo.turn === 9) {
        clearBoard()
        turnReset()
        disable()
        showNewGame()
        gameInfo.turn = 0
        return $(showWinner).html('Tie!')
      } else {
        return false // no winner so return "false"
      }
    })
  }

  // function triggers making sure turn goes before winner is checked or
  // else it will take an additional click to register the html element for win
  takeTurns()
  checkWinner()
}
disable()
module.exports = {
  tileSelect,
  disable,
  clearBoard
}
