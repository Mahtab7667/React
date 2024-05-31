import React, { useRef } from 'react'

const Task1 = () => {


    let inpt=useRef();

    let handleClick=()=>{
        // console.log(inpt);
        inpt.current.focus();
    }


  return (
    <>
    <div>Task1</div>

    <input type="text"  ref={inpt}/>
    <button onClick={handleClick}>click me</button>
    </>
  )
}

export default Task1