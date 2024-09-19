import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

export default function App(){
  //The atom only defines the state and its default value.
  //The useRecoilState hook gives you both the current value of the atom and a function (setcount) to update it.
  //You don't need to explicitly define setcount in the atom—Recoil manages the updating process for you through the hook.
  return(
    <div>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count(){
  console.log('count re-rendered')
  return(
    <div>
     <CountRender/>
     <Buttons/>
    </div>
  )
}

function CountRender(){
  const count=useRecoilValue(countAtom);
  return(
    <div>
      Count {count}
    </div>
  )
}

function Buttons(){
  const [count, setcount] = useRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}