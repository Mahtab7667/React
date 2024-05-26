import React from "react";



const Button=(props)=>{


    console.log(props);

    return(
        <>
        <div>Task7</div>
        <button style={{width:"100px", height:"50px"}} onClick={props.props.handleClick}>{props.props.btnText}</button>
        </>
    )
}

export default Button;