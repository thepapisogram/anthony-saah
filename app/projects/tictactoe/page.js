/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from 'react';

import '@/app/styles/projects/tictactoe.css'
import BackLink from '@/app/components/universal/BackLink';

export default function page() {

  // State to hold if game is ongoing
  const [ongoing, setOngoing] = useState(true);

  // State to check current player (X or O)
  const [playerTurn, setPlayerTurn] = useState(true)

  // Game Status (Turn, Win, Draw)
  const [status, setStatus] = useState("X's Turn")

  // Game Squares
  const [squares, setSquares] = useState(Array(9).fill(''))

  // Announce Game End
  const announceGame = (outcome, winner = '') => {

    switch(outcome){
      case 'win':
        setStatus(`${winner} wins this game`);
        break;
      case 'draw':
        setStatus('The game was tied');
        break;
    }

    setOngoing(false)
  }

  // Check Win
  const checkWin = () => {

    // Check Horizontally
    if(squares[0] !== '' && squares[0] === squares[1] && squares[1] === squares[2]){
      announceGame('win', squares[0]);
    } else if (squares[3] !== '' && squares[3] === squares[4] && squares[4] === squares[5]) {
      announceGame('win', squares[3]);
    } else if (squares[6] !== '' && squares[6] === squares[7] && squares[7] === squares[8]) {
      announceGame('win', squares[6]);
    } 
    
    // Check Vertically
    else if (squares[0] !== '' && squares[0] === squares[3] && squares[3] === squares[6]) {
      announceGame('win', squares[0]);
    }  else if (squares[1] !== '' && squares[1] === squares[4] && squares[4] === squares[7]) {
      announceGame('win', squares[1]);
    } else if (squares[2] !== '' && squares[2] === squares[5] && squares[5] === squares[8]) {
      announceGame('win', squares[2]);
    }

    // Check Diagonally
    else if (squares[0] !== '' && squares[0] === squares[4] && squares[4] === squares[8]) {
      announceGame('win', squares[0]);
    } else if (squares[2] !== '' && squares[2] === squares[4] && squares[4] === squares[6]) {
      announceGame('win', squares[2]);
    }

    // Check if all squares are filled. Then draw
    else {
      let allFilled = squares.every(square => square !== '');
      if(allFilled){
        announceGame('draw')
      }
    }

  }

  // When square is clicked. Check if its empty and render X or O based on playerTurn
  const handleClick = (e, pos) => {
    // Copy squares state so we can replace the clicked position
    const newSquares = squares;
    const squarePlayed = e.target.innerText;
    if (squarePlayed === ''){
      e.target.innerText = ( playerTurn ? "X" : "O");
      newSquares[pos] = playerTurn ? "X" : "O";
      setSquares(newSquares);
      setStatus(playerTurn ? "O's turn" : "X's Turn")
      setPlayerTurn(!playerTurn);
    }
    checkWin();
  }

  // Restart Game - Reset all state to default values
  const restart = () => {
    setOngoing(true);
    setPlayerTurn(true)
    setStatus("X's Turn")
    setSquares(Array(9).fill(''))
  }

  return (
    <div className="p-2 my-3">
      <BackLink link="/projects" text="Projects" />
      <div className="tictactoe">
        <h1 className='game-info'>Tic Tac Toe</h1>
        <button className="square" onClick={(e) => handleClick(e, 0)} disabled={!ongoing}>{squares[0]}</button>
        <button className="square" onClick={(e) => handleClick(e, 1)} disabled={!ongoing}>{squares[1]}</button>
        <button className="square" onClick={(e) => handleClick(e, 2)} disabled={!ongoing}>{squares[2]}</button>
        <button className="square" onClick={(e) => handleClick(e, 3)} disabled={!ongoing}>{squares[3]}</button>
        <button className="square" onClick={(e) => handleClick(e, 4)} disabled={!ongoing}>{squares[4]}</button>
        <button className="square" onClick={(e) => handleClick(e, 5)} disabled={!ongoing}>{squares[5]}</button>
        <button className="square" onClick={(e) => handleClick(e, 6)} disabled={!ongoing}>{squares[6]}</button>
        <button className="square" onClick={(e) => handleClick(e, 7)} disabled={!ongoing}>{squares[7]}</button>
        <button className="square" onClick={(e) => handleClick(e, 8)} disabled={!ongoing}>{squares[8]}</button>
        <h1 className='game-info'>{status}</h1>
        {!ongoing && <button className='start-btn' onClick={restart}>Restart Game</button>}
      </div>
    </div>
  )
}
