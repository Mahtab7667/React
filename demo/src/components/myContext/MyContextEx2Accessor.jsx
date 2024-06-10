import React, { useContext } from 'react'
import { contextVar } from './MyContextEx2'
import './MyContextEx2.css'

const MyContextEx2Accessor = () => {



  let data=useContext(contextVar);
  console.log(data);



  return (
    <>
    {/* <div>MyContextEx2Accessor</div> */}

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
    </>
  )
}

export default MyContextEx2Accessor