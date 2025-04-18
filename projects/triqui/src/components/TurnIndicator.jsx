import { Square } from './Square'
import { TURNS } from '../constants'
import '../index.css'

const TurnIndicator = ({turn}) => {
  return(
    <section className='flex justify-center mx-auto my-[15px] w-fit relative rounded-[10px] gap-5'>
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  )
}

export { TurnIndicator }