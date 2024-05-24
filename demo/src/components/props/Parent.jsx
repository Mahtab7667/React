import React from 'react'
import Child from './Child.jsx';

 const Parent = () => {

    let a=10;
    let fun=()=>{
        console.log("I am Function from parent");
    }

  return (
    <>
    <div>Parent</div>
    <Child props={{a,fun}} />
    </>
  )
}

export default Parent;
