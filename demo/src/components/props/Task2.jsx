import React from "react";



const UserInfo=(recieve)=>{

    // recive as an object
    // let name=recieve.props.name;
    // let age=recieve.props.age;

    // recive as an attribute
    let name=recieve.name;
    let age=recieve.age;

    // console.log(recieve); in third case inside recieve, age:true and name:true

    return(
        <>
        <div>task2</div>
        <h1>My name is {name} and my age is {age}</h1>
        </>
    )
}

export default UserInfo;