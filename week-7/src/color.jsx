import React from "react";
import { useState } from "react";

function App(){
    const [color, setcolor] = useState('');
    const colors = ['red','yellow', 'black', 'purple', 'green', 'blue', 'orange']
    return(
        <div style={{backgroundColor:color, height: '100vh'}}>
            <div>
                {colors.map((col)=>(
                    <button key={col} onClick={()=>setcolor(col)}>{col.charAt(0).toUpperCase() + col.slice(1)}</button>
                ))}
            </div>
        </div>
    )
}

export default App;