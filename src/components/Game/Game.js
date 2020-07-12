import React, { Component, Fragment } from 'react'

// import messages from '../AutoDismissAlert/messages'
import GameBoard from '../GameBoard/GameBoard.js'

// socket implementation
import io from 'socket.io-client'
import { socketUrl } from '../../apiConfig'
const socket = io(socketUrl)

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

  setBoard = board => this.setState({ board })
  setP1HP = p1HP => this.setState({ p1HP })
  setP2HP = p2HP => this.setState({ p2HP })
  setGameId = gameId => this.setState({ gameId })

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
      const data = action.action
      console.log(data)
      switch (data.type) {
      case 'move':
        console.log(data.move)
        const newBoard = this.state.board
        newBoard[data.move.playerOldPos] = ''
        newBoard[data.move.playerNewPos] = data.move.player
        this.setBoard(newBoard)
        break
      case 'attack':
        console.log(data.attack)
        if (data.attack.player === 'player1') {
          const newHP = this.state.p1HP - data.attack.damage
          console.log('New HP is: ' + newHP)
          this.setP1HP(newHP)
        } else {
          const newHP = this.state.p2HP - data.attack.damage
          console.log('New HP is: ' + newHP)
          this.setP2HP(newHP)
        }
        break
      }
    })
  }

  join = (id, action) => {
    const gameId = id
    console.log('The game id is: ' + id)
    this.setGameId(gameId)
    socket.emit('join', { gameId, action }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }

  move = (player, playerOldPos, playerNewPos) => {
    socket.emit('sendAction', { gameId: this.state.gameId, type: 'move', move: { player, playerOldPos, playerNewPos } }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }

  dealDamage = (player, damage) => {
    socket.emit('sendAction', { gameId: this.state.gameId, type: 'attack', attack: { player, damage } }, (error) => {
      if (error) {
        alert(error)
      }
    })
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
