const Button = ({enabled, setEnabled}) => {
    return(
        <button className='rounded-xl
            w-[250px] h-[50px]
            px-5 py-2.5
            text-lg font-bold
          bg-[#ef476f] text-[#242424]
            cursor-pointer
            transition-colors duration-200
            hover:border-[#646cff]
            focus:outline-4 focus:outline-blue-500' 
            onClick={() => setEnabled(!enabled)}>
            {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
    )
}

export { Button }