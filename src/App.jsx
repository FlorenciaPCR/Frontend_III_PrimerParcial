import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>Elige una banda 🎸</h1>
     <Formulario></Formulario>
    </div>
  )
}

export default App
