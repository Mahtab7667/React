import React from "react";


const Greeting=(props)=>{

    let receive=props.name;
    console.log(props.name);

    return(
        <>
        <div>task1</div>
        <h1>Welcome {receive}</h1>
        </>
    )
}

export default Greeting;