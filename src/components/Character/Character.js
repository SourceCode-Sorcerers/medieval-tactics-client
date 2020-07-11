import React, { useState, Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'

const Character = ({ board, move, cellId }) => {
  const [show, setShow] = useState(false)
  const [playerName] = useState('player1')

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
  const attack = () => handleClose()

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

  return (
    <Fragment>
      <img
        onClick={handleShow}
        src="https://i.imgur.com/MFlDp7d.png"
      />
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <section>
            {moveUpButton}
            {moveRightButton}
            {moveDownButton}
            {moveLeftButton}

            <Button
              variant="outline-dark"
              onClick={() => { attack() }}
            >
              Attack
            </Button>
          </section>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}

export default Character
