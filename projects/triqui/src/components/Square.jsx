import '../index.css'

const Square = ({children, isSelected, updateBoard, index}) => {

    const className = `w-[90px] h-[90px] border-2 border-gray-300 rounded-md grid place-items-center cursor-pointer text-4xl ${isSelected ? 'text-white bg-[#09f]' : ''}`
  
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