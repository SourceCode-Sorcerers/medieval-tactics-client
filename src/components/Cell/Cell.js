import React, { useState, Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'
<<<<<<< HEAD
=======
import Character from '../Character/Character'
>>>>>>> Working on adding Character Component

function Cell ({ id, handleChange, cell }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const move = () => handleClose()
  const attack = () => handleClose()
  return (
    <Fragment>
      <p
        id={id}
        className={'cell'}
        onClick={handleShow}
      >
<<<<<<< HEAD
        {cell}
=======
        {(cell === 1 || cell === 12) ? <Character/> : cell}
>>>>>>> Working on adding Character Component
      </p>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <section>
            <Button
              variant="outline-dark"
              onClick={() => { move() }}
            >
              Move
            </Button>
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

export default Cell
