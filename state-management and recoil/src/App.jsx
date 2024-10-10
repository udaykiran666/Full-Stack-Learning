import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, countselector } from "./store/atoms/count";
import { useMemo } from "react";a

export default function App(){
  //The atom only defines the state and its default value.
  //The useRecoilState hook gives you both the current value of the atom and a function (setcount) to update it.
  //You don't need to explicitly define setcount in the atom—Recoil manages the updating process for you through the hook.

//   Yes, in Recoil there are three primary hooks that are commonly used:

// 1. **`useRecoilValue`**: 
//    - Used to **read** the value of a Recoil atom or selector.
//    - Example: `const value = useRecoilValue(myAtom);`

// 2. **`useRecoilState`**:
//    - Used to **both read and write** the value of a Recoil atom.
//    - This is similar to how `useState` works in React.
//    - Example: `const [value, setValue] = useRecoilState(myAtom);`

// 3. **`useSetRecoilState`**:
//    - Used to **write** (update) the value of a Recoil atom without needing to read its value.
//    - Example: `const setValue = useSetRecoilState(myAtom);`

// These three hooks cover most of the use cases for managing state with Recoil.

// selector is used the derive the value of atoms
// ### **Similarities**:
// - Both **selectors** and **`useMemo`** are used for **memoization**, meaning they avoid unnecessary recomputation if the inputs (dependencies) haven't changed.
// - They both **cache** the result of a computation.
// - They automatically **recalculate** when their dependencies (atoms for selectors, or variables for `useMemo`) change.

// ### **Differences**:
// 1. **Scope**:
//    - **`useMemo`**: It's scoped to a **single component**. If you want to share the memoized value across multiple components, you'd need to pass the value around via props or context.
//    - **Recoil Selector**: Can be shared **globally across multiple components**. Any component can subscribe to the selector, and it will get the memoized value without needing to pass props.

// 2. **State Integration**:
//    - **`useMemo`**: Works within the standard React component lifecycle and is used to optimize performance inside a specific component.
//    - **Recoil Selector**: Works directly with **Recoil atoms** and **other selectors**, making it part of Recoil's global state management system.

// 3. **Reusability**:
//    - **`useMemo`**: Local to the component where it's defined.
//    - **Recoil Selector**: **Reusable** in any component that subscribes to the selector, making it highly modular and shareable across your entire application.

// 4. **Automatic Recalculation**:
//    - **Both**: Automatically recompute when their dependencies (like the atom in Recoil or the variable in `useMemo`) change.
//    - **Recoil Selector**: Works in the background, recalculating the state for all components relying on it, while `useMemo` only affects the specific component it is used in.

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
  console.log('countrender re-rendered')
  const count=useRecoilValue(countAtom);
  return(
    <div>
      Count {count}
    <Displaytext/>
    </div>
    
  )
}

function Buttons(){
  console.log('buttons re-rendered')
  const setcount = useSetRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>setcount(prevcount=>prevcount+1)}>Increment</button>
      <button onClick={()=>setcount(prevcount=>prevcount-1)}>Decrement</button>
    </div>
  )
}

function Displaytext(){
  console.log("Display text")
  const isEven = useRecoilValue(countselector)
  return(
    <div>
     {isEven ?"It is even":"It is odd" }
    </div>
  )
}