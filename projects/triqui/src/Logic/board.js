import {winner_combinations} from '../constants'
import confetti from 'canvas-confetti'

export const checkWinnerFrom = (boardToCheck) => {
    //revisa todas las combinaciones ganadoras para ver si ganó alguien
    for(const combination of winner_combinations){
      const a = combination[0]
      const b = combination[1]
      const c = combination[2]

      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
  //si todas las celdas estan ocupadas hay un empate
  return newBoard.every((cell) => cell !== null)
}
