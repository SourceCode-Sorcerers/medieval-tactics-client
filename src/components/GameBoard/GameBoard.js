import React, { useState, useEffect, Fragment } from 'react'
// import apiUrl from '../../apiConfig'
// import axios from 'axios'
import Cell from '../Cell/Cell'

const GameBoard = ({ startingBoard, p1HP, p2HP, move }) => {
  const [board, setBoard] = useState([])
  useEffect(() => {
    setBoard(startingBoard)
  }, [startingBoard])
  const handleChange = (cellId, value) => {
    const newBoard = board.map(value => value)
    if (value) {
      newBoard[cellId] = Number(value)
    } else {
      newBoard[cellId] = ''
    }
  }
  const boardJsx = board.map((cell, index) => (
    <Cell
      key = {index}
      id = {index}
      handleChange = {handleChange}
      cell = {cell}
      move = {move}
      board = {board}
    />
  ))
  return (
    <Fragment>
      <form className = 'board' >
        {boardJsx}
      </form>
      <p>Player 1 HP <br/>{p1HP}</p>
      <p>Player 2 HP <br/>{p2HP}</p>
    </Fragment>
  )
}

export default GameBoard
