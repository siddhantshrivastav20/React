import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)


  const addValue = () => {
    if(counter <20){
      setCounter(counter+1)
    }
    
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
    

  }

  return (
    <>
      <h1>React Js</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
