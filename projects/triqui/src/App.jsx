import { useGameState } from './Logic/hooks/useGameState'
import { WinnerModal } from './components/WinnerModal'
import { ResetGame } from './components/ResetGame'
import { Board } from './components/Board'
import { TurnIndicator } from './components/TurnIndicator'


import './index.css'
import confetti from 'canvas-confetti'

function App() {

  const { board, turn, winner, updateBoard, resetGame } = useGameState()

  return (
    <main className='main-style'>
      <h1 className='style-h1'>Tic Tac Toe</h1>
      <ResetGame handleReset={resetGame} />
      <Board board={board} updateBoard={updateBoard} />
      <TurnIndicator turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
