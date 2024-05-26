import React from "react";


const List=({props})=>{

    console.log(props);


    return(
        <>
        <div>List</div>
        <ul type="square">
            {props.map((val,i)=><li key={i} >{val}</li>)}
        </ul>
        </>
    )
}

export default List;