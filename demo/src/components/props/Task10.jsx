import React from "react";
import Img1 from "./task10img1";


const Gallery=({props})=>{



    console.log(props);

    return(
        <>
        <div>Task10</div>

        {/* <ul>
            {props.map((val,i)=>{
                return <li key={i}><img src={val}  /></li>
            })}
        </ul> */}

        <div>
          {props.map((val,i)=>{
               return <Img1 url1={val}/>
         })}
        </div>

             
        </>
    )
}

export default Gallery;