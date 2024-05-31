import React, { useState } from 'react'

const Task1BooleanProp = ({prop=false}) => {

    let [login,setLogin]=useState(prop)

    // console.log(prop); on each event it execute also with eventHandler function

    let handleClick=()=>{
        setLogin(!login)
    }

    let stl={
        border:"2px solid black",
        width:"230px",
        cursor:"pointer"
    }

  return (
    <>
    <div>Task1BooleanProp</div>

    <h1 style={{...stl}} onClick={handleClick}>{login?"Welcome Back":"Please Sign In"}</h1>
    </>
  )
}

export default Task1BooleanProp;