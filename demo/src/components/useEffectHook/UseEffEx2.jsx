import React, { useEffect, useState } from 'react'
import './UseEffEx2.css'

const UseEffEx2 = () => {


    let [data,setData]=useState([])
    // let data;

    useEffect(()=>{
        getData();
    },[])


    let getData= async ()=>{
        const response=await fetch("https://api.github.com/users")
        const task=await response.json();
        console.log(task);
        setData(task)

        //  const data=await response.json();
        // console.log(data);
    }

    // console.log(state);

  return (
    <>
   <div className='outer'>
    {data.map((val,i)=>{
    return (
      <div className='card' key={i}>
      <img src={val.avatar_url}/>
      <h1>{val.login}</h1>
      <div className='id-type'>
      <p>id: {val.id}</p>
      <p className='type'>{val.type}</p>
      </div>
    </div>
    )
  })}
</div>


   {/* <div>
    {data.map((val,i)=>{
        return console.log("hi");
    })}
   </div> */}
</>
)
}

export default UseEffEx2