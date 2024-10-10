import { useState } from 'react'
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil"
import './App.css'
import { filterAtom, filterSelector, todoAtom, todoList } from './store/atoms/todo'

function App() {
  return (
    <>
    <RecoilRoot>
      <Todo/>
    </RecoilRoot>
    </>
  )
}

function Todo(){
  return(
    <div>
      <AddToDo/>
      <Filter/>
      <RenderToDo/>
    </div>
  )
}

function AddToDo(){

    const [todo, settodo] = useRecoilState(todoAtom);
    const [todoslist, settodoslist] = useRecoilState(todoList);

  const handleTitlechange=(event) => {
    settodo({
      ...todo,
      title: event.target.value,
    })
  }

  const handleDescriptionchange=(event) => {
    settodo({
      ...todo,
      description: event.target.value,
    })
  }

  const handleSubmit=()=>{
    if (todo.title.trim() || todo.description.trim()){
      settodoslist([...todoslist, todo])
      settodo({
        title:'',
        description:''
      })

    }
}

  return(
    <div>
      <input
      type='text'
      placeholder='Title'
      value={todo.title}
      onChange={(handleTitlechange)}
      /> <br></br>

      <input
      type='text'
      placeholder='Description'
      value={todo.description}
      onChange={(handleDescriptionchange)}
      /> <br></br>

      <button
      onClick={(handleSubmit)}>Submit</button>
    </div>
  )
}

function Filter(){

  const [filterword, setfilterword] = useRecoilState(filterAtom)
  const handleFilterchange=(event)=>{
    setfilterword(event.target.value)
  }
  return(
    <div>
      <input
      type='text'
      placeholder='Filter'
      onChange={(handleFilterchange)}
      /> <br></br>
    </div>
  )
}

function RenderToDo(){
  const filtertodos = useRecoilValue(filterSelector);
  return(
    <div>
    <h2>Todo List:</h2>
    {filtertodos.length > 0 ? (
      filtertodos.map((todo, index) => (
        <div key={index}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))
    ) : (
      <p>No todos match the filter.</p>
    )}
  </div>
)};


export default App
