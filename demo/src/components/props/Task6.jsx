import React from "react";


const Toggle=({isOn})=>{

    console.log(isOn);

    return(
        <>
        <div>Task6</div>
        <h1>{isOn=="true"?"ON":"OFF"}</h1>
        </>
    )
}

export default Toggle;