import React, { useState } from 'react'

const Task3Rdio = () => {


    let [state,setState]=useState("nothing selected")

    let handleRadio=(e)=>{
        // console.log(e.target.value);
        setState(e.target.value)

    }

  return (
    <>
    <div>Task3Rdio</div>

    <label>
    <input type="radio" name="interest" onChange={handleRadio} value="cricket" /> Cricket
    <input type="radio" name="interest" onChange={handleRadio} value="football"/> Football
    </label>
    <h1>Selected Option is: {state}</h1>
    </>
  )
}

export default Task3Rdio