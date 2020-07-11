import React, { Fragment } from 'react'
import Character from '../Character/Character'

function Cell ({ id, cell }) {
  return (
    <Fragment>
      <p
        id={id}
        className={'cell'}
      >
        {(cell === 'player1' || cell === 'player2') ? <Character/> : cell}
      </p>
    </Fragment>
  )
}

export default Cell
