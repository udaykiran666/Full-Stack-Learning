import { useEffect, useState } from "react"

const useTodos=()=>{
    const [todos, settodos] = useState[[]];
    useEffect(()=>{
        const data = async()=>{
            const response = await fetch('http://localhost:3000/todos');
            const data= await response.json();
            settodos(data);
        };
        data();
    },[]);
}

export const App3=()=>{
    const todos = useTodos();
    return(
        <div>
            {todos.map((todo,index)=>{
                return <div key={index}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                </div>
            })}
        </div>
    )
}