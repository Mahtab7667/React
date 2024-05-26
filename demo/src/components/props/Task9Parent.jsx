import React from "react";
import Profile from "./Task9";


const Task9Parent=()=>{


    let obj={
         name:"Ram",
         email:"ram@123"
    }
    
    return(
        <>
        <div>Task9parent</div>
        <Profile user={obj}/>
        </>
    )
}

export default Task9Parent;