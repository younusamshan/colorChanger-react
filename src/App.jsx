import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from 'postcss'

function App() {
  const [count, setCount] = useState('green')

  return (
    <>
      <p className='mainContainer' style={
        {

          backgroundColor: `${count}`,

        }
      } >


        <button style={{background: 'red'}} onClick={() => setCount('red')}>red</button>
        <button style={{background: 'teal'}} onClick={() => setCount('teal')}>teal</button>
        <button style={{background: 'lime'}} onClick={() => setCount('lime')}>lime</button>
        <button style={{background: 'olive'}} onClick={() => setCount('olive')}>olive</button>
        <button style={{background: 'aqua'}} onClick={() => setCount('aqua')}>aqua</button>
        <button style={{background: 'navy'}} onClick={() => setCount('navy')}>navy</button>
        <button style={{background: 'blue'}} onClick={() => setCount('blue')}>blue</button>
      </p>






    </>
  )
}

export default App
