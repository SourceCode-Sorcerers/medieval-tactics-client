import React, { Component, Fragment } from 'react'

// import messages from '../AutoDismissAlert/messages'
import GameBoard from '../GameBoard/GameBoard.js'

class Game extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  board = new Array(12)

  render () {
    return (
      <Fragment>
        <button>Start a Game</button>

        <button>Join a Game</button>

        <GameBoard
          startingBoard = { this.board }
        />
      </Fragment>
    )
  }
}

export default Game
