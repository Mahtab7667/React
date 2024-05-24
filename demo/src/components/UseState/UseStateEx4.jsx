import React, {useState} from 'react'


const UseStateEx4=()=>{
    
    let [number,setNumber]=useState(0);
    let handleRanNumGen=()=>{
        let result=Math.floor(Math.random()*1000);
        setNumber(result);
    }


    return(
        <>
        <h1>random number: {number}</h1>
        <button onClick={handleRanNumGen}>Generate</button>
        </>
    )
}

export default UseStateEx4;