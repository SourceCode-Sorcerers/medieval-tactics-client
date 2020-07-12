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
  setP1HP = p1HP => this.setState({ p1HP })
  setP2HP = p2HP => this.setState({ p2HP })

  move = (player, playerOldPos, playerNewPos) => {
    const newBoard = this.state.board
    newBoard[playerOldPos] = ''
    newBoard[playerNewPos] = player
    this.setBoard(newBoard)
  }

  dealDamage = (player, damage) => {
    if (player === 'player1') {
      const newHP = this.state.p1HP - damage
      console.log('New HP is: ' + newHP)
      this.setP1HP(newHP)
    } else {
      const newHP = this.state.p2HP - damage
      console.log('New HP is: ' + newHP)
      this.setP2HP(newHP)
    }
  }

  render () {
    return (
      <Fragment>
        <button>Start a Game</button>

        <button>Join a Game</button>

        <GameBoard
          startingBoard = {this.state.board}
          p1HP = {this.state.p1HP}
          p2HP = {this.state.p2HP}
          move = {this.move}
          dealDamage = {this.dealDamage}
        />
      </Fragment>
    )
  }
}

export default Game
