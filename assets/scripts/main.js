
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
