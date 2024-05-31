import React, { useState } from 'react'
import './Task3.css'
const Task3DynamicClassName = () => {

    let [isPrimary,setIsPrimary]=useState(false)

    let handleClick=()=>{
        setIsPrimary(!isPrimary)
    }

  return (
    <>
    <div>Task3DynamicClassName</div>

    <button className={isPrimary?"primary":"secondary"} onClick={handleClick}>{isPrimary?"secondary":"primary"}</button>
    </>
  )
}

export default Task3DynamicClassName