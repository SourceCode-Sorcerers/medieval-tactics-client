import React, { Fragment } from 'react'
// import apiUrl from '../../apiConfig'
// import axios from 'axios'
import Cell from '../Cell/Cell'

const GameBoard = ({ board, p1HP, p2HP, move, dealDamage }) => {
  const boardJsx = board.map((cell, index) => (
    <Cell
      key = {index}
      id = {index}
      cell = {cell}
      move = {move}
      dealDamage = {dealDamage}
      board = {board}
    />
  ))
  return (
    <Fragment>
      <p>Player 1 HP <br/>{p1HP}</p>
      <form className = 'board' >
        {boardJsx}
      </form>
      <p>Player 2 HP <br/>{p2HP}</p>
    </Fragment>
  )
}

export default GameBoard
