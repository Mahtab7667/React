import React, { createContext, useState } from 'react'
export let contextVariable=createContext()

const MyContext = (props) => {

    let [count,setCount]=useState(100)

  return (
    <>
    <h1>MyContext</h1>
    <contextVariable.Provider value={{count,setCount}}>{props.children}</contextVariable.Provider>
    </>
  )
}

export default MyContext