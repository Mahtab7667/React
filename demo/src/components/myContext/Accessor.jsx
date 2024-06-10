import React, { useContext } from 'react'
import { contextVariable } from './MyContext'

const Accessor = () => {

    let data=useContext(contextVariable);
    console.log(data); //value ke andr ka object aajareha hai directly.

    let handleClick=()=>{
        // data.setCount(data.count+1)
        data.setCount(data.count-1)
    }

  return (
    <>
    <div>Accessor</div>

    <div style={{border:"2px solid black",width:"300px"}}>
    <h1>{data.count}</h1>
    <button onClick={handleClick}>click</button>
    </div>
    </>
  )
}

export default Accessor