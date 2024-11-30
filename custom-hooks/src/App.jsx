import { useEffect, useState } from 'react'
import axios from 'axios'
import { Usedebounce } from './components/useDebounce';

// function useTodods(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false)
//       })
//     }, n*1000);
    
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading
      
//         return () => {
//           clearInterval(value);
//         }
//       });
//   }, [n])

//   return {todos, loading};

// }

function useonline(n) {
  const [isonline, setIsonline]  =useState(window.navigator.onLine); //this window.navigator.onLine one approach..but below is preferred

  const value  = useEffect(() => {
    setInterval(() => {
      window.addEventListener('online', ()=>{setIsonline(true);})
      window.addEventListener('offline', ()=>{setIsonline(false);})
      console.log(isonline);
    }, n*1000);

    return ()=>{
      clearInterval(value);
    }
  },[n])
  return isonline;
}
function App() {
  // const {todos, loading} = useTodods(5);
  // const isonline = useonline(5);

  return (
    <>
    <Usedebounce/>
  {/* <div>
    {isonline ? (
      <div>You are connected to the network</div>
    ) : (
      <div style={{ color: 'red' }}>You're Internet Connection Lost</div>
    )}
  </div> */}


      {/* {loading ? "Loading...." : todos.map(todo => <Track todo={todo} />)} */}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App