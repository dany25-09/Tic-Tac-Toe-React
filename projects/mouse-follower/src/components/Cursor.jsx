
const Cursor = ({position}) => {
    return(
        <div
        className="
            absolute bg-[#02b3ff] bg-opacity-50 border border-white rounded-full opacity-80 pointer-events-none
            w-[50px] h-[50px]
            transform -left-[20px] -top-[20px]"
        style={{
            transform: `translate(${position.x}px, ${position.y}px)`
        }}
        ></div>
    )
}

export { Cursor };