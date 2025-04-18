import { useState, useEffect } from 'react'

export const useMouseTracking = (enabled) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup function to remove the event listener
    // Cuando el componente se desmonta o cuando cambian las dependencias
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return position
}
