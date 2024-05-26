import React from "react";


const Welcome=(props)=>{

    console.log(props);
    let name=props.name;
    
    // if(props.name==undefined){
    //     name="guest"
    // }
    // else{
    //     name=props.name;
    // }


    return(
        <>
        <div>task3</div>
        {/* <h1>Welcome {name==undefined?"Guest":name}</h1> */}
        <h1>Welcome {"name" in props?name:"Guest"}</h1>
        </>
    )
}

export default Welcome;