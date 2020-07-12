import React, { useState, Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'
import img from '../../Resources/Character1.png'

const Character = ({ board, move, dealDamage, cellId, player }) => {
  const [show, setShow] = useState(false)
  const [playerName] = useState(player)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const moveUp = () => {
    // Player position index -4
    // Cannot use if in index 3 or less || player2 is there
    move(playerName, cellId, cellId - 4)
  }
  const moveRight = () => {
    // Player position index +1
    // Cannot use if in index 11 || player2 is there
    move(playerName, cellId, cellId + 1)
  }
  const moveDown = () => {
    // Player position index +4
    // Cannot use if in index 8 or more || player2 is there
    move(playerName, cellId, cellId + 4)
  }
  const moveLeft = () => {
    // Player position index -1
    // Cannot use if in index 0 || player2 is there
    move(playerName, cellId, cellId - 1)
  }
  const attack = () => {
    let target
    if (playerName === 'player1') {
      target = 'player2'
    } else {
      target = 'player1'
    }
    console.log('Target in Character is: ' + target)
    dealDamage(target, 20)
    handleClose()
  }

  let moveUpButton
  if (cellId >= 4 && board[cellId - 4] === '') {
    moveUpButton = (
      <Button
        variant="outline-dark"
        onClick={() => { moveUp() }}
      >
        Move Up
      </Button>
    )
  }

  let moveRightButton
  if (cellId % 4 !== 3 && board[cellId + 1] === '') {
    moveRightButton = (
      <Button
        variant="outline-dark"
        onClick={() => { moveRight() }}
      >
        Move Right
      </Button>
    )
  }

  let moveDownButton
  if (cellId <= 8 && board[cellId + 4] === '') {
    moveDownButton = (
      <Button
        variant="outline-dark"
        onClick={() => { moveDown() }}
      >
        Move Down
      </Button>
    )
  }

  let moveLeftButton
  if (cellId % 4 !== 0 && board[cellId - 1] === '') {
    moveLeftButton = (
      <Button
        variant="outline-dark"
        onClick={() => { moveLeft() }}
      >
        Move Left
      </Button>
    )
  }

  let enemySpace
  if (playerName === 'player1') {
    enemySpace = board.findIndex(name => name === 'player2')
  } else {
    enemySpace = board.findIndex(name => name === 'player1')
  }
  let attackButton
  if (cellId - 1 === enemySpace || cellId + 1 === enemySpace || cellId - 4 === enemySpace || cellId + 4 === enemySpace) {
    attackButton = (
      <Button
        variant="outline-dark"
        onClick={() => { attack() }}
      >
        Attack
      </Button>
    )
  }

  return (
    <Fragment>
      <img
        onClick={handleShow}
        src={img}
      />
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <section>
            {moveUpButton}
            {moveRightButton}
            {moveDownButton}
            {moveLeftButton}
            {attackButton}
          </section>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}

export default Character
