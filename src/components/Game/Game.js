import React, { Component, Fragment } from 'react'

// import messages from '../AutoDismissAlert/messages'
import GameBoard from '../GameBoard/GameBoard.js'

class Game extends Component {
  constructor () {
    super()

    this.state = {
      p1HP: 100,
      p2HP: 100
    }
  }

  board = ['player1', '', '', '', '', '', '', '', '', '', '', 'player2']

  render () {
    return (
      <Fragment>
        <button>Start a Game</button>

        <button>Join a Game</button>

        <GameBoard
          startingBoard = { this.board }
          p1HP = { this.state.p1HP }
          p2HP = { this.state.p2HP }
        />
      </Fragment>
    )
  }
}

export default Game
