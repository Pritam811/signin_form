import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LogIn } from './Components/LogIn/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogIn />
    </>
  )
}

export default App
