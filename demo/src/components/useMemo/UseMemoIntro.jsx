import React, { useMemo, useState } from 'react'

const UseMemoIntro = () => {

  let [count1,setCount1]=useState(0)
  let [count2,setCount2]=useState(0)


  let checkCount1=useMemo(()=>{
    let i=0;
    while(i<1000000000){
      i++
    }
    if(count1%2==0) return "even"
    else return "odd"
  },[count1])

  let checkCount2=()=>{
    if(count2%2==0) return "even"
    else return "odd"
  }

  return (
    <>
    <div>UseMemoIntro</div>

    <button onClick={()=>{setCount1(count1+1)}}>count : {count1} {checkCount1}</button>
    <br /><br />
    <button onClick={()=>{setCount2(count2+1)}}>count : {count2} {checkCount2()}</button>
    </>
  )
}

export default UseMemoIntro