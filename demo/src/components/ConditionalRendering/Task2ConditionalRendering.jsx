import React, { useState } from 'react'

const Task2ConditionalRendering = () => {
    


    let [state,setState]=useState(false)
    console.log(state);

    let handle1stH1=()=>{
        setState(!state)
    }

  return (
    <>
    <div>Task2ConditionalRendering</div>

    <div>
    {state?<h1 onClick={handle1stH1}>1st heading</h1>:<h1 onClick={handle1stH1}>2nd heading</h1>}
    </div>
   
    </>
  )
}

export default Task2ConditionalRendering