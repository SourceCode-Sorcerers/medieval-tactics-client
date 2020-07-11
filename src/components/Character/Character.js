import React, { useState, Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'

const Character = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const move = () => handleClose()
  const attack = () => handleClose()
  return (
    <Fragment>
      <img
        onClick={handleShow}
        src="https://i.imgur.com/MFlDp7d.png"
      />
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

export default Character
