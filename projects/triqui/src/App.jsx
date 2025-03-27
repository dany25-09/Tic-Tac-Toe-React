import { useState } from 'react';
import { WinnerModal } from './components/WinnerModal';
import { ResetGame } from './components/ResetGame';
import { Board } from './components/Board';
import { TurnIndicator } from './components/TurnIndicator';

import { TURNS } from './constants';
import { checkWinnerFrom, checkEndGame } from './Logic/board';
import { saveGameToStorage, resetGameFromStorage } from '../storage/index';

import './index.css';
import confetti from 'canvas-confetti';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X
  });

  // null = no hay ganador, false = empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    // No actualizar si ya hay un ganador o la casilla está ocupada
    if (board[index] !== null || winner) return;

    // Actualiza el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guarda la partida
    saveGameToStorage({ board: newBoard, turn: newTurn });

    // Revisa si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Empate
    }
  };

  // Reinicia el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameFromStorage();

  };

  return (
    <main className='main-style'>
      <h1 className='style-h1'>Tic Tac Toe</h1>
      <ResetGame handleReset={resetGame} />
      <Board board={board} updateBoard={updateBoard} />
      <TurnIndicator turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
