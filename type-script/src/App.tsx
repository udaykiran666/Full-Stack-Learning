import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Todo title='Go to GYM' completed={false} description='Do the workout and '/>
    </>
  )
}

interface Todoprops{
  title:string,
  completed:boolean,
  description:string
}

function Todo(props: Todoprops){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h1>{props.completed?'Completed': 'Not Completed'}</h1>
    </div>
  )
}

export default App
