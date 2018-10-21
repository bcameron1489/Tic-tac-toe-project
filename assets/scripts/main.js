const turn = {
  counter: 10
}

const gameLock = {
  status: false
}

const setGameStatus = function () {
  if (gameLock.status === true) {
    return $('td').off('click')
  }
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
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html(sq0 + ' Wins')
    } else if (sq3 !== '' & sq3 === sq4 & sq4 === sq5) {
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html(sq3 + ' Wins')
    } else if (sq6 !== '' & sq6 === sq7 & sq7 === sq8) {
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html(sq6 + ' Wins')
    } else if (sq0 !== '' & sq0 === sq3 & sq3 === sq6) {
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html(sq0 + ' Wins')
    } else if (sq1 !== '' & sq1 === sq4 & sq4 === sq7) {
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html(sq1 + ' Wins')
    } else if (sq2 !== '' & sq2 === sq5 & sq5 === sq8) {
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html(sq2 + ' Wins')
    } else if (sq0 !== '' & sq0 === sq4 & sq4 === sq8) {
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html(sq0 + ' Wins')
    } else if (sq6 !== '' & sq6 === sq4 & sq4 === sq2) {
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html(sq6 + ' Wins')
    } else if (turn.counter === 19) {
      turn.counter = 10
      gameLock.status = true
      setGameStatus()
      return $(showWinner).html('Tie!')
    } else {
      return false // no winner so return "false"
    }
  })
}

const turnSwitch = function () {
  checkWinner()
  return turn.counter++
}

const tileSelect = function () {
  $('td').on('click', function (event) {
    if (turn.counter % 2 === 0) {
      $(event.target).html('X')
      turnSwitch()
      console.log(turn.counter)
    } else {
      $(event.target).html('Y')
      turnSwitch()
      console.log(turn.counter)
    }
  })
}

const addHandlers = function () {
  tileSelect()
}

module.exports = {
  addHandlers
}
