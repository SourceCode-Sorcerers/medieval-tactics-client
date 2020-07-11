import React, { Component, Fragment } from 'react'

// import messages from '../AutoDismissAlert/messages'
// import GameBoard from '../GameBoard/GameBoard.js'
//         <GameBoard
//            board = { this.board }
//          />

class Game extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  board = []

  render () {
    return (
      <Fragment>
        <button>Start a Game</button>

        <button>Join a Game</button>

      </Fragment>
    )
  }
}

export default Game
