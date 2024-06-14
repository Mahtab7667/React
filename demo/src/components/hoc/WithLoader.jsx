import React from 'react'
import { useState } from 'react'

const WithLoader = (RecievedComponent) => {

    let [state,setState]=useState(true)

  return ()=>{
    setTimeout(()=>{
        setState(false)
    },2000)

    return (
    <div>
      {state?<h1>Loading...</h1>:<RecievedComponent/>} 
    </div>
    )
      
  }  
}

export default WithLoader