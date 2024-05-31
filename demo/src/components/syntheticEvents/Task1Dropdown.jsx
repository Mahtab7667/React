import React, { useState } from 'react'

const Task1Dropdown = () => {


  let [state,setState]=useState("nothing selected till now");
  let handleOption=(e)=>{
    // console.log(e.target.value);
    setState(e.target.value);
  }


  return (
    <>
    <div>Task1</div>

    <h1>Option : {state}</h1>

    <select name="" onChange={handleOption}>
      <option value="mango">Mango</option>
      <option value="banana">Banana</option>
      <option value="apple">Apple</option>
    </select>
    </>
  )
}

export default Task1Dropdown;