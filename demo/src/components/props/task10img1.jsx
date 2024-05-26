import React from "react";


const Img1=({url1})=>{


    console.log(url1);


    return(
        <>
        <div>img1</div>
        <ul type="square">
            {<li><img src={url1}></img></li>}
        </ul>
        </>
    )
}

export default Img1;