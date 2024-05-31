import React, { useRef, useState } from 'react'

const Task2 = () => {


    let [state,setState]=useState("");
    let inpt=useRef();


    let handleChange=()=>{
        setState(inpt.current.value);
    }

  return (
    <>
    <div>Task2</div>

    <input type="text" onChange={handleChange} ref={inpt}/>
    <h1>current value of input field is: {state}</h1>
    </>
  )
}

export default Task2