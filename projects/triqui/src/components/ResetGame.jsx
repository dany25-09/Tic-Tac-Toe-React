import '../index.css'

const ResetGame = ({ handleReset }) => {
    return(
        <button onClick={handleReset} className='button-style'>Reset juego</button>
    )
}

export { ResetGame }