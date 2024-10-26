
import './App.css'
import { RecoilRoot, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const todo = useRecoilValueLoadable(todosAtomFamily(id));  // this conrtains 2 klike {content,state}
   
   if(todo.state === 'loading'){
    return <div>Loading....</div>
   }
   else if(todo.state === 'hasValue'){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
   }
   else if(todo.state === 'hasError'){
    return <div>Error occured....</div>
   }
}

export default App
