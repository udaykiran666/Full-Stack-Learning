import { useMemo, useState } from "react"

export const Task=()=>{
    const [counter, setcounter] = useState('');
    const [inputnumber, setinputnumber] = useState('');

   let count = useMemo(()=>{
    let finalCount = 0;
    for(let i=1;i<=inputnumber;i++){
        console.log('came insinde thi')
        finalCount+=i;
    }
    return finalCount;
   }, [inputnumber])

    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter the number"
            value={inputnumber}
            onChange={(event)=>{
                setinputnumber(event.target.value)
            }}/><br></br>
            <h3>The sum from 0 to {inputnumber} is {count}</h3><br></br>
            <button onClick={()=>setcounter(counter + 1)}>Counter ({counter})</button>
        </div>
    )
}