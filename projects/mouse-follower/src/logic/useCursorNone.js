import { useEffect } from 'react';

export const useCursorNone = (enabled) => {
      useEffect(() => {
        document.body.classList.toggle('cursor-none', enabled);
    
        return () => {
          document.body.classList.remove('cursor-none', enabled);
        }
      }, [enabled]); 
}