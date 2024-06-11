/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import '@/app/styles/projects/tictactoe.css'
import BackLink from '@/app/components/universal/BackLink';
import { useState } from 'react';

export default function page() {

  const [playerTurn, setPlayerTurn] = useState(true)

  const [row1, setRow1] = useState([0, 0, 0])
  const [row2, setRow2] = useState([0, 0, 0])
  const [row3, setRow3] = useState([0, 0, 0])

  const handleMove = (row, pos) => {
    const row_name = `row${row}`;
    let new_row = [...this[row_name]];

    // new_row[pos] = 
  }

  return (
    <div className="p-2 my-3">
      <BackLink link="/projects" text="Projects" />
      <div className="tictactoe">
        <h1 className='game-text'>Tic Tac Toe</h1>
        <div className="box">X</div>
        <div className="box">X</div>
        <div className="selected-box">X</div>
        <div className="box">X</div>
        <div className="box">X</div>
        <div className="box">X</div>
        <div className="box">X</div>
        <div className="box">X</div>
        <div className="box">X</div>
        <h1 className='game-text'>Computer Wins!</h1>
      </div>
    </div>
  )
}
