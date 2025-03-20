import { Children, useState } from 'react'
import './index.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const board = Array(9).fill(null)

const Square = ({children, isSelected, updateBoard, index}) => {

  const className = `w-[100px] h-[100px] border-2 border-gray-300 rounded-md grid place-items-center cursor-pointer text-4xl ${isSelected ? 'text-white bg-[#09f]' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const winner_combinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
  [0, 4, 8], [2, 4, 6], //diagonals
]


function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  //null es que no hay ganador, false es empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
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

  const updateBoard = (index) => {
    //no se actualiza esta poscicion si ya esta ocupada o si ya hay un ganador
    if(board[index] !== null || winner) return  

    //actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisa si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner) //actualiza el ganador (Es asincrono)
    } // todo:check id game is over 
  }

  //Basta con poner todos los estados en su valor inicial
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='flex flex-col justify-center items-center w-fit mx-auto mt-10 gap-5'>
      <h1>Tic Tac Toe</h1>
      <section className='grid grid-cols-3 gap-2.5'>
        {
         board.map((cell, index) => {
          return(
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          )})}
      </section>
      <section className='flex justify-center mx-auto my-[15px] w-fit relative rounded-[10px] gap-5'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winner !== null && (
          <section className='absolute inset-0 w-screen h-screen grid place-items-center bg-black/70'>
            <div className='bg-[#111] h-[300px] w-[320px] border-2 border-[#eee] rounded-[10px] flex flex-col justify-center items-center gap-5'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Ganó'
                }
              </h2>

              <header className='mx-auto w-fit rounded-[10px] flex gap-[15px]'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame} className='h-[35px] w-[150px] rounded-4xl border-2 border-white hover:bg-gray-700 cursor-pointer'>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
