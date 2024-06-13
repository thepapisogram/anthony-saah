/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from 'react';

import '@/app/styles/projects/tictactoe.css'
import BackLink from '@/app/components/universal/BackLink';

export default function page() {

  // State to force re-render
  const [, forceRender] = useState();

  // State to hold if game is ongoing
  const [ongoing, setOngoing] = useState(true);

  // State to check current player (X or O)
  const [playerTurn, setPlayerTurn] = useState(true)

  // State to choose whether playing against computer
  const [isAgainstComputer, setIsAgainstComputer] = useState(true);

  // Game Status (Turn, Win, Draw)
  const [status, setStatus] = useState("X's Turn")

  // Game Squares
  const [squares, setSquares] = useState(Array(9).fill(''))

  // Announce Game End
  const announceGame = (outcome, winner = '') => {

    setOngoing(false)
    switch (outcome) {
      case 'win':
        setStatus(`${winner} wins this game`);
        break;
      case 'draw':
        setStatus('The game was tied');
        break;
    }
  }

  // Check Win
  const checkWin = () => {

    const lines = [
      // Horizontal lines
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal lines
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        announceGame('win', squares[a]);
        return;
      }
    }

    // Check if all squares are filled. Then draw
    if (squares.every(square => square !== '')) {
      announceGame('draw');
    }
  }


  // When square is clicked. Check if its empty and render X or O based on playerTurn
  const handleClick = (e, pos) => {
    // Copy squares state so we can replace the clicked position
    let newSquares = squares;
    const squarePlayed = e.target.innerText;
    if (squarePlayed === '' && ongoing) {
      newSquares[pos] = playerTurn ? "X" : "O";
      setSquares(newSquares);
      setPlayerTurn(!playerTurn);
      setStatus(playerTurn ? "O's turn" : "X's turn")
      if (isAgainstComputer && ongoing) {
        let emptySquares = newSquares.map((square, index) => square === '' ? index : -1).filter(index => index !== -1);
        if (emptySquares.length > 0) {
          let randomIndex = Math.floor(Math.random() * emptySquares.length);
          let computerPos = emptySquares[randomIndex];
          newSquares[computerPos] = "O"; // Assuming computer plays as 'O'
          setSquares(newSquares);
          setPlayerTurn(true);
          setStatus("X's turn")
          checkWin(); // Check if computer wins after making a move
        } else checkWin();
      }
      checkWin();
    }

    forceRender(Math.random()); // Update state with a new value to trigger re-render
  }

  // Restart Game - Reset all state to default values
  const restart = () => {
    setOngoing(true);
    setPlayerTurn(true)
    setStatus("X's Turn")
    setSquares(Array(9).fill(''))
  }

  const toggleMode = () => {
    // Toggle between computer and two players mode
    setIsAgainstComputer(!isAgainstComputer);
    restart(); // Reset game when mode changes
  }

  return (
    <div className="p-2 my-3">
      <BackLink link="/projects" text="Projects" />
      <div className="tictactoe">
        <h1 className='game-info'>Tic Tac Toe</h1>
        <button className='game-toggle' onClick={toggleMode}>{isAgainstComputer ? "Play as Two players" : "Play against AI"}</button>
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
        <p className="game-toggle-text head-text">{isAgainstComputer ? "Playing against AI" : "Playing as two players"}</p>
        {!ongoing && <button className='start-btn' onClick={restart}>Restart Game</button>}
      </div>
    </div>
  )
}
