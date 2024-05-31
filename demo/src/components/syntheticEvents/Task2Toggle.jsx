import React, { useState } from 'react'

const Task2Toggle = () => {


    let [state,setState]=useState("no checked")
    
    let flag=0;

    let handleCheckbox=(e)=>{
        if(flag===0){
            console.log("if");
            setState("checked");
            flag=flag+1;
        }
        else{
            console.log("else");
            setState("not checked")
            flag=0;
        }
    }

  return (
    <>
    <div>Task2Toggle</div>
    
    <input type="checkbox"  onChange={handleCheckbox}/>
    <h1>Checkbox is :{state}</h1>
    </>
  )
}

export default Task2Toggle