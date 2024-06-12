/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import '@/app/styles/projects/tictactoe.css'
import BackLink from '@/app/components/universal/BackLink';
import { useState } from 'react';

export default function page() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard)
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(board);
  const status = winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O');

  const renderSquare = (index) => {
    return (
      <div className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    )
  }

  // const [playerTurn, setPlayerTurn] = useState(true)

  // const [row1, setRow1] = useState([0, 0, 0])
  // const [row2, setRow2] = useState([0, 0, 0])
  // const [row3, setRow3] = useState([0, 0, 0])

  // const handleMove = (row, pos) => {
  //   const row_name = `row${row}`;
  //   let new_row = [...this[row_name]];
  // }

  return (
    <div className="p-2 my-3">
      <BackLink link="/projects" text="Projects" />
      <div className="tictactoe">
        <h1 className='game-info'>Tic Tac Toe</h1>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        <h1 className='game-info'>{status}</h1>
      </div>
    </div>
  )
}
