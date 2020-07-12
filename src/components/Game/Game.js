import React, { Component, Fragment } from 'react'

// import messages from '../AutoDismissAlert/messages'
import GameBoard from '../GameBoard/GameBoard.js'

// socket implementation
import io from 'socket.io-client'
const socket = io('http://localhost:5000/')

class Game extends Component {
  constructor () {
    super()

    this.state = {
      gameId: '',
      p1HP: 100,
      p2HP: 100,
      board: ['player1', '', '', '', '', '', '', '', '', '', '', 'player2']
    }
  }

  componentDidMount () {
    socket.on('message', message => {
      // setMessages(messages => [ ...messages, message ])
      console.log(message)
      switch (message.action) {
      case 'join':
        console.log('Join Success')
        break
      case 'new player':
        console.log('new player enter')
        break
      case 'leave':
        console.log('Player left')
        break
      default:
        console.log('error in switch case')
      }
    })

    socket.on('action', action => {
      console.log(action)
    })
  }

  join = (id, action) => {
    const gameId = id
    console.log('The game id is: ' + id)

    socket.emit('join', { gameId, action }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }

  setBoard = board => this.setState({ board })
  setP1HP = p1HP => this.setState({ p1HP })
  setP2HP = p2HP => this.setState({ p2HP })
  setGameId = gameId => this.setState({ gameId })

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
    const { user } = this.props
    return (
      <Fragment>
        <button onClick={() => this.join(user.email, 'create')}>Start a Game</button>

        <div>
          <input placeholder="Game Id" type="text" onChange={(event) => this.setGameId(event.target.value)} />
          <button onClick={() => this.join(this.state.gameId, 'join')} type="submit">Join a Game</button>
        </div>

        <GameBoard
          board = {this.state.board}
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
