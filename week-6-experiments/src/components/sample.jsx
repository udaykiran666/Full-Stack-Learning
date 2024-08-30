import { memo } from "react";
const Basic = memo(function Basic({title}){
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
})

export default Basic;