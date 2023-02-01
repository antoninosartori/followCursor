import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [position, setPosition] = useState({x: 0, y: 0})
  const [isFilled, setIsFilled] = useState(false);
  const [isSquared, setIsSquared] = useState(false);

  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }

    window.addEventListener('pointermove', handleMove)
  })

  const handleFill = () => {
    setIsFilled(!isFilled)
  }
  const handleSquared = () => {
    setIsSquared(!isSquared)
  }

  return (
    <>
      <main>
        <div 
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            left: 0,
            top: 0,
            border:'1px solid #fff',
            borderRadius: isSquared ? '' : '50%',
            backgroundColor: isFilled ? '#fff' : 'transparent',
            pointerEvents: 'none',
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: ' all .1s',
            filter: `drop-shadow(10px 10px 5px #ffffff23)`
          }}
        />

        <button onClick={handleFill}> {!isFilled ? 'fill' : 'empty' } </button>
        <button onClick={handleSquared}> {!isSquared ? 'square' : 'circle' } </button>
      </main>
    </>
  )
}

export default App
