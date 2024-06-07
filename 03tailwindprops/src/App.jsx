import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-d rounded-xl mb-2'>Tailwind test</h1>
      <Card username = "Siddhant"/>
      <Card username = "Sanjeev"/>
    </>
  )
}

export default App
