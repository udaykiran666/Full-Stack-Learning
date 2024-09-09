import { memo, useState, useCallback } from "react"

export const Parent=()=>{
    const [counter, setcounter] = useState(0)
    console.log('counter',counter)

    const normalFunction=useCallback(()=>{
        console.log('normal fucntion is called')
    },[]) // only something in this dependency array changes then and only below child is re-rednered...

    return(
        <div>
            <Child input={normalFunction}/>
            <button onClick={()=>{
                setcounter(counter + 1)
            }}>Click me {counter}</button>
        </div>
    )
}

const Child=memo(({input})=>{ // only memo is enough to stop child re-rendering if there is no input passed..if input then we need to have useCallback from sender fun
    console.log('child re-rednered') // useCallback is not needed only for strung,numbers,booleans..
    return(
        <div> 
            <button onClick={input}>Buttonn Clicked</button>
        </div>
    )
})

