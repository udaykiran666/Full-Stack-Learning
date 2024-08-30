import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from './components/sample'


function App() {
  const [title, setTitle] = useState('My Name is Uday')
  function UpdateTitle(){
    setTitle("My Name is "+ Math.random());
  }
  return (
  <div>
  <button onClick={UpdateTitle}>Update the title</button>
  <Basic title={title}/>
  <Basic title="React App1"/>
  <Basic title="React App2"/>
  <Basic title="React App3" />
  <Basic title="React App4"/>
  </div>
  )
}
// function FunctionUpdate(){
//   const [title, setTitle] = useState('My Name is Uday')
//   function UpdateTitle(){
//     setTitle("My Name is "+ Math.random());
//   }
//   return (
//     <>
//     <button onClick={UpdateTitle}>Update the title</button>
//     <Basic title={title}/>
//     </>
//   )

// }
export default App
