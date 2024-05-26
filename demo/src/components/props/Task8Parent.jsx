import React from "react";
import List from "./Task8";


const Task8Parent=()=>{


    let arr=["Mango","banana","tomato","avocado"]

    return(
        <>
        <div>Task8Parent</div>
        <List props={arr}/>
        </>
    )
}

export default Task8Parent;