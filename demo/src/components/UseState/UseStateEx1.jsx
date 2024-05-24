import React, { useState } from 'react';


export const UseStateEx1 = () => {
    let result=useState(0);
    // let result=[0,function];
    let [count,setCount]=result;
    let handleInc=()=>{
        setCount(count+1)
    }
    let handleDec=()=>{
        setCount(count-1)
    }
    let handleRes=()=>{
        setCount(0);
    }

  return (
    <>
        <h1>count: {count}</h1>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleRes}>Reset</button>
    </>
  )
}

