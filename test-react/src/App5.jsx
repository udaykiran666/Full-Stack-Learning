import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"

export const App5=()=>{
    const [incomeTax, setincometax] = useState(20000);
    const incometaxref = useRef();

    useEffect(()=>{
        setTimeout(() => {
            console.log(incometaxref.current)
            incometaxref.current.innerHTML = 10;
        }, 5000);
    }, [])
    return(
        <div>
            hi there, you tax income tax returns are <div ref={incometaxref}>{incomeTax}</div>
        </div>
    )
}