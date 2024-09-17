import { useContext, useState, useCallback, memo } from "react"
import { CountContext } from "./context";

function App() {
  const [count, setcount]=useState(0);

  const handleIncrement = useCallback(() => {
    setcount((prevcount)=>prevcount+1);
  }, []);

  const handleDecrement = useCallback(() => {
    setcount((prevcount)=>prevcount-1);
  }, []);
  //wrap anyone that wants to use the teleported value inside the provider
  return (
    <div>
      <CountContext.Provider value={{count, handleIncrement, handleDecrement}}>
        <Count/>
      </CountContext.Provider>
      <CountDisplay/>
    </div>
  )
}

function Count(){
  return(
    <div>
    <CountRender/>
    <Buttons/>
    </div>
  )
}
function CountRender(){
  const {count} = useContext(CountContext);
  return(
    <div>
      Count {count}
    </div>
  )
}

const CountDisplay=memo(()=>{
  console.log('came here ')
  // here we'll get the count value which we defined in context.jsx fiole.not above count value from App component  
  const {count} = useContext(CountContext);
  return(
    <div>
      not an child component of Count {count}
    </div>
  )
});


function Buttons(){
  const {handleIncrement, handleDecrement} = useContext(CountContext);
  console.log(handleDecrement)
  console.log(handleIncrement)
  return(
    <div>
    <button onClick={
      handleIncrement}>Increase</button>

    <button onClick={
     handleDecrement}>Decrease</button>
    </div>
  )
}

export default App
