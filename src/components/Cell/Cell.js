import React, { Fragment } from 'react'
import Character from '../Character/Character'

function Cell ({ id, cell, move, board }) {
  return (
    <Fragment>
      <p
        id={id}
        className={'cell'}
      >
        {(cell === 'player1' || cell === 'player2') ? <Character move = {move} board = {board} cellId = {id}/> : cell}
      </p>
    </Fragment>
  )
}

export default Cell
