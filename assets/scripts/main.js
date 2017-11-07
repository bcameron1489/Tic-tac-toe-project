// turn game logic

const tileSelect = function () {
  const gameInfo = {
    turn: (0)
  // moves: (0)
  }
  // alternate turns
  $('.game-piece').click(function () {
    if (gameInfo.turn % 2 === 0) {
      $(this).html('X')
    } else {
      $(this).html('O')
    }
    gameInfo.turn += 1
  })
  // display turn
  const gameBoard = $('.turn')
  $('#game-grid').click(function () {
    if (gameInfo.turn === 9) {
      $(gameBoard).html('Game Over')
    } else if
    (gameInfo.turn % 2 === 1) {
      $(gameBoard).html('Player Two!')
    } else {
      $(gameBoard).html('Player One!')
    }
  })
}
module.exports = {
  tileSelect
}
