import React from "react";
import UserInfo from "./Task2";

const Task2Parent=()=>{

    let age=20;
    let name="ram"

    return(
        <>

        <div>task2 parent</div>
        
        {/* sending as an object(props is an object here) */}
        {/* <UserInfo props={{age,name}}/> */}

        {/* sending as an attribute(age and name passed like key:pair in recive object in Userinfo component) */}
        <UserInfo  age={10}  name="ram"/>

        {/* <UserInfo
        age  //return boolean value as true
        name // return boolean value as true
        /> */}

        </>
    )
}

export default Task2Parent;