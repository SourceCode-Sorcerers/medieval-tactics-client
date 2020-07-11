import React, { useState, useEffect } from 'react'
// import apiUrl from '../../apiConfig'
// import axios from 'axios'
import Cell from '../Cell/Cell'

const GameBoard = ({ user, gameId, startingBoard, msgAlert }) => {
  const [board, setBoard] = useState([])
  useEffect(() => {
    setBoard(startingBoard)
  }, [startingBoard])
  const handleChange = (cellId, value) => {
    const newBoard = cleanBoard.map(value => value)
    if (value) {
      newBoard[cellId] = Number(value)
    } else {
      newBoard[cellId] = ''
    }
  }
  const cleanBoard = [...board].map(cell => typeof cell === 'number' ? cell : '')
  const boardJsx = cleanBoard.map((cell, index) => (
    <Cell
      key = {index}
      id = {index}
      handleChange = {handleChange}
      cell = {cell}
    />
  ))
  return (
    <form className = 'board' >
      {boardJsx}
    <
    /form>
  )
}

export default GameBoard
