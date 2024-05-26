import React from "react";


const Task4Child=(recieve)=>{
    

    console.log(recieve);
    let age=recieve.props;

    return(
        <>
        <div>Task4Child</div>
        <h1>Age is {age}</h1>
        </>
    )
}

export default Task4Child;
