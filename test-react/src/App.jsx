import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [showtodos, setshowtodos] = useState(false);

  useEffect(()=>{
    if(showtodos){
      console.log('it runned!!');
      fetchData();
    }
  },[showtodos]);

  const fetchData = async ()=>{
    try{
      const response = await fetch('http://localhost:3000/todos');
      const data = await response.json();
      setTodos(data);
    } catch(error){
      console.error('Error:', error);
    }
  }

  return (
    <>
    <button onClick={()=>{
      setshowtodos(true)
    }} className="get-todo">Get Tasks</button>
    {showtodos && 
      todos.map((todo, index)=>{
      return <div key={index}>
            <h4>{todo.title}</h4>
            <h4>{todo.description}</h4>
      </div>
    })}
    </>
  )
}

export default App
