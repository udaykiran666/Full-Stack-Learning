import { createContext } from "react";

export const CountContext = createContext({
    count: 0,     // default value for count
    setcount: () => {} ,// placeholder function for setcount
    handleIncrement: ()=>{},
    handleDecrement: ()=>{}
    });