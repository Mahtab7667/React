import React from "react";
import Task4Child from "./Task4Child";

const Task4Parent2=({age,name})=>{
    

    console.log(age);
    console.log(name);

    let newAge=age+10;

    return(
    <>
        <div>Task4Parent2</div>
        <h1>Name is {name} and Age is in parent2 {age}</h1>
        <Task4Child 
        props={newAge}
        />
    </>
    )
}

export default Task4Parent2;
