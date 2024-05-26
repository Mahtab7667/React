import React from "react";
import Button from "./Task7";


const Task7Parent=()=>{


    let btnText="click"

    let handleClick=()=>{
        console.log("I am Task 7 Parent");
    }

    return(
        <>
        <div>task7parent</div>
        <Button props={{btnText,handleClick}}/>

        {/* <Button label={btnText} handleClk={handleClick}/> */}
        </>
    )
}

export default Task7Parent;