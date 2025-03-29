import '../index.css'

const Square = ({children, isSelected, updateBoard, index}) => {

    const className = `w-[90px] h-[90px] border-2 border-[#D4ADFC] rounded-md grid place-items-center cursor-pointer text-4xl md:w-[150px] md:h-[150px] lg:w-[90px] lg:h-[90px] ${isSelected ? 'text-white  border-5 bg-[#D4ADFC]' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }

  export { Square } 