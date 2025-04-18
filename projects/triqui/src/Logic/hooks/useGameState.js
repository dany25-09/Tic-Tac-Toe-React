import { useState } from 'react'
import { checkWinnerFrom, checkEndGame} from '../board'
import { TURNS } from '../../constants'
import {saveGameToStorage, resetGameFromStorage} from '../../../storage/index'	
import confetti from 'canvas-confetti'

export const useGameState = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null = no hay ganador, false = empate
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // No actualizar si ya hay un ganador o la casilla está ocupada
    if (board[index] !== null || winner) return

    // Actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)

    // Guarda la partida
    saveGameToStorage({ board: newBoard, turn: newTurn })

    // Revisa si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  };

  // Reinicia el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameFromStorage()

  }

  return { board, turn, winner, updateBoard, resetGame }
}
