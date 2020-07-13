import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

// import messages from '../AutoDismissAlert/messages'
import GameBoard from '../GameBoard/GameBoard.js'

// socket implementation
import io from 'socket.io-client'
import apiUrl from '../../apiConfig'
const socket = io(apiUrl)

// Custom Styled Components
const Container = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Game extends Component {
  constructor () {
    super()

    this.state = {
      activeGame: false,
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
  setActiveGame = activeGame => this.setState({ activeGame })

  componentDidMount () {
    socket.on('message', message => {
      console.log(message)
      switch (message.action) {
      case 'join':
        this.setActiveGame(true)
        console.log('Join Success')
        break
      case 'new player':
        console.log('new player enter')
        break
      case 'leave':
        this.setActiveGame(false)
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
        { !this.state.activeGame ? (
          <Container>
            <Button variant="dark" onClick={() => this.join(user.email, 'create')}>Start a Game</Button>

            <div>
              <input placeholder="Game Id" type="text" onChange={(event) => this.setGameId(event.target.value)} />
              <Button variant="dark" onClick={() => this.join(this.state.gameId, 'join')} type="submit">Join a Game</Button>
            </div>
          </Container>
        ) : (
          <Container>
            <GameBoard
              board = {this.state.board}
              p1HP = {this.state.p1HP}
              p2HP = {this.state.p2HP}
              move = {this.move}
              dealDamage = {this.dealDamage}
            />
          </Container>
        )
        }
      </Fragment>)
  }
}

export default Game
