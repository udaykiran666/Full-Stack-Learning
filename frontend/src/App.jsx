import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateToDo from "./components/CreatetoDo"
import RenderToDO from "./components/ToDo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateToDo/>
      <RenderToDO/>
    </div>
  )
}

export default App
