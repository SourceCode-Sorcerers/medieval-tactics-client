import React, { Fragment } from 'react'
import Character from '../Character/Character'

function Cell ({ player, id, cell, move, dealDamage, board, gameStarted }) {
  return (
    <Fragment>
      <p
        id={id}
        className={'cell'}
      >
        {(cell === 'player1' || cell === 'player2') ? <Character move = {move} dealDamage = {dealDamage} player = {player} board = {board} cellId = {id} gameStarted = {gameStarted} owner = {cell}/> : cell}
      </p>
    </Fragment>
  )
}

export default Cell
