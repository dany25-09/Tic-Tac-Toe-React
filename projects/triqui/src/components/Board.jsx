import { Square } from './Square'

const Board = ({board, updateBoard}) => {
    return( 
        <section className='grid grid-cols-3 gap-2.5'>
            {
            board.map((cell, index) => {
            return(
                <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
                </Square>
            )})}
        </section>
    )}

export { Board }