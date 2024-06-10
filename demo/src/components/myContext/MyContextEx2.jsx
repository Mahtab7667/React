import React, { createContext, useEffect, useState } from 'react'
export let contextVar=createContext();

const MyContextEx2 = (props) => {



    let [myApi,setMyApi]=useState([]);

    useEffect(()=>{
        fetching()
    },[])

    let fetching= async()=>{
        let res=await fetch("https://api.github.com/users")
        let data=await res.json()
        setMyApi(data);
        console.log(data);
    }


  return (
    <>
    {/* <div>MyContextEx2</div> */}
    <contextVar.Provider value={myApi}>{props.children}</contextVar.Provider>
    </>
  )
}

export default MyContextEx2