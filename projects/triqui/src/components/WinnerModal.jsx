import { Square } from './Square'

const WinnerModal = ({ winner, resetGame }) => {
    if(winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Felicidades al ganador!'

    return(
        <section className='absolute inset-0 w-screen h-screen grid place-items-center bg-black/70'>
        <div className='bg-[#5C469C] h-[330px] w-[330px] border-2 border-white rounded-[10px] flex flex-col justify-center items-center gap-10 md:h-[450px] md:w-[450px]'>
            <h2 className='text-2xl lg:text-xl md:text-3xl lg:h-[300px] lg:w-[320px]'>{winnerText}</h2>

            <header className='mx-auto w-fit rounded-[10px] flex gap-[5px]'>
                {winner && <Square cl>{winner}</Square>}
            </header>

            <footer>
                <button onClick={resetGame} className='button-style'>Reset juego</button>
            </footer>
        </div>
        </section>
    )}
            
export { WinnerModal }