import React, { Component, Fragment } from 'react'

// import messages from '../AutoDismissAlert/messages'
import GameBoard from '../GameBoard/GameBoard.js'

class Game extends Component {
  constructor () {
    super()

    this.state = {
      p1HP: 100,
      p2HP: 100,
      board: ['player1', '', '', '', '', '', '', '', '', '', '', 'player2']

    }
  }

  setBoard = board => this.setState({ board })

  move = (player, playerOldPos, playerNewPos) => {
    const newBoard = this.state.board
    newBoard[playerOldPos] = ''
    newBoard[playerNewPos] = player
    this.setBoard(newBoard)
  }

  render () {
    return (
      <Fragment>
        <button>Start a Game</button>

        <button>Join a Game</button>

        <GameBoard
          startingBoard = { this.state.board }
          p1HP = { this.state.p1HP }
          p2HP = { this.state.p2HP }
          move = { this.move }
        />
      </Fragment>
    )
  }
}

export default Game
