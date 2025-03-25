import { Square } from './Square'

const WinnerModal = ({ winner, resetGame }) => {
    if(winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó'

    return(
        <section className='absolute inset-0 w-screen h-screen grid place-items-center bg-black/70'>
        <div className='bg-[#111] h-[300px] w-[320px] border-2 border-[#eee] rounded-[10px] flex flex-col justify-center items-center gap-5'>
            <h2>{winnerText}</h2>

            <header className='mx-auto w-fit rounded-[10px] flex gap-[15px]'>
            {winner && <Square>{winner}</Square>}
            </header>

            <footer>
            <button onClick={resetGame} className='button-style'>Empezar de nuevo</button>
            </footer>
        </div>
        </section>
    )}
            
export { WinnerModal }