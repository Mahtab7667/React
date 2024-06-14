import React, { useCallback, useState } from 'react'
import UseCallbackEx1Child from './UseCallbackEx1Child'

const UseCallbackEx1 = () => {


    let [state,setState]=useState(0)
    let [count,setCount]=useState(0)

    // let func=()=>{
    //     console.log("func executed");
    // }
    // at each time when we change state then parent component regenerete and react thinks the func function is new and it send as a props again and again either inside function anything change or not it will render child component.to solve this problem we use useCallback() hook.


    // memo- when props not pased and we want to stop re-rendering then use hoc memo.
    // useCallback()- use when pass any props to child. beacuse when we change the state then parent component regenerate and react thinks the props we are passing that is generating again and again it render the child again and again and it cant be prevenred using memo thats why we will use useCallback() hook.
    
    // useEffect(callback,[dependency]) achive mount,update, and unmount
    // useMemo(callback,[dependency]) achive performace to pass function as a callback that has complex calculateion in which more time is taken and due to that other componet will slow
    // useCallback(callback,[dependency]) prevent unneccessry rerendering of child while passing any props.

  
    // let a=5;
    // let x=useCallback(()=>{
    //     let a=5;
    // },[count])

   // let a=6; // we do not pass variable like this we pass state and when we pass the state it will render the full component. this is rare case where we pass any variable like this and we cant prevent rerendering of child when we pass the variable like this in props.

    //    1. we can only prevent rerendering of child for function. 
    // 2. it is not applicable for any variable.
    
    let func =useCallback(()=>{
        console.log("func executed")
    },[count])


  return (
      <>
    <div>UseCallbackEx1</div>
    <UseCallbackEx1Child props={{func,x}}/>

    <button onClick={()=>setState(state+1)}>state: {state}</button>
    <button onClick={()=>setCount(count+1)}>count: {count}</button>
      </>
  )
}

export default UseCallbackEx1