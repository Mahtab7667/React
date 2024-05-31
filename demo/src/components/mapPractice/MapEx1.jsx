import React from 'react'

const MapEx1 = () => {


    let arr=[10,20,30,40,50]
    // let a=" ";

  return (
    <>
    {
        arr.length>0 && arr.map((val,i)=>{
            return(
                 <span>{val}</span>
            )
        })
    }
    </>
  )
}

export default MapEx1