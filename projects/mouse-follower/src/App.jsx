import { useState } from 'react';
import { Cursor } from './components/Cursor';
import { Button } from './components/Button';
import { useMouseTracking } from './logic/useMouseTracking';
import { useCursorNone } from './logic/useCursorNone';
import './index.css';

function App() {

  const [enabled, setEnabled] = useState(false);
  const position = useMouseTracking(enabled);
  useCursorNone(enabled);

  return (
    <main className='font-sans leading-6 font-normal antialiased'>
      <Cursor position={position} />
      <Button enabled={enabled} setEnabled={setEnabled} />
    </main>
  )
}

export default App
