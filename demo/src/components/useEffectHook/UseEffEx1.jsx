import React, { useEffect, useState } from 'react'

const UseEffEx1 = () => {

    let [count,setCount]=useState("")
    let [count1,setCount1]=useState(20)

    useEffect(()=>{
        console.log("count value changed");
    },[count,count1])
    //TO achieve componnt did mount do not pass any dependeny
    // to achieve component did update pass the dependency in use effect
    // to achive component unmount use return inside useEffect and that return only work when that component will destroy which happended in unmount case.

  return (
    <>
    <div>UseEffEx1</div>

    <h1>count is: {count}</h1>
    <button onClick={()=>setCount(count+1)}>increment</button>


    <h1>count is: {count1}</h1>
    <button onClick={()=>setCount1(count1-1)}>decrement</button>
    </>
  )
}

export default UseEffEx1