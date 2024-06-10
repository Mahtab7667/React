import { Fragment, useContext } from "react";
import { contVar } from "./MyContextEx1";
import React from 'react'

const MyContextEx1Accessor = () => {


    let data=useContext(contVar);
    console.log(data);

    let result= Object.values(data);
    console.log(result);


  return (
    <>
    <div>MyContextEx1Accessor</div>
    <div>
        {result.length>0 && result.map((val,i)=>{
            return(
                <Fragment key={i}>
                <img src={val} style={{width:"200px",height:"200px"}}/>
                </Fragment>
            ) 
        })}
    </div>
    </>
  )
}

export default MyContextEx1Accessor