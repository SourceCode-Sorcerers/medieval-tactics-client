import React, { Fragment } from 'react'
import Character from '../Character/Character'

function Cell ({ id, cell, move, dealDamage, board }) {
  return (
    <Fragment>
      <p
        id={id}
        className={'cell'}
      >
        {(cell === 'player1' || cell === 'player2') ? <Character move = {move} dealDamage = {dealDamage} board = {board} cellId = {id} player = {cell}/> : cell}
      </p>
    </Fragment>
  )
}

export default Cell
