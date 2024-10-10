import {atom, selector} from "recoil"


export const todoAtom = atom({
    key:'todoAtom',
    default:{
        title:'',
        description:''
    }
})
export const todoList = atom({
    key: "todoList",
    default: [],    
})

export const filterAtom = atom({
    key:'filterAtom',
    default:''
})

export const filterSelector = selector({
    key:'filterSelector',
    get : (props)=>{
        const todos = props.get(todoList);
        console.log(todos)
        const filter = props.get(filterAtom);
        
        if(!filter){
            return todos;  // return all todos if no filter is applied  //
        }
        return todos.filter(todo => 
            todo.title.toLowerCase().includes(filter.toLowerCase()) ||
            todo.description.toLowerCase().includes(filter.toLowerCase())
          )}
})