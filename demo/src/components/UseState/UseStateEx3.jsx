import React, {useState} from 'react'


const UseStateEx3=()=>{
    
    let body= document.body;
    let [color,setColor]=useState("white");
    body.style.backgroundColor=color;
    return(
        <div>
            <button onClick={()=>{setColor("red")}}>red</button>
            <button onClick={()=>{setColor("green")}}>Green</button>
            <button onClick={()=>{setColor("blue")}}>Blue</button>
            <button onClick={()=>{setColor("yellow")}}>Yellow</button>
        </div>
    )
}

export default UseStateEx3;