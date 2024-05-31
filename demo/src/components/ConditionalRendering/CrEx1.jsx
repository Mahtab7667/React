import React, { useState } from 'react'
import Home from './Home'

const CrEx1 = () => {



    let [state,setState]=useState(false)


  return (
    <>
    <div>

     <nav style={{width:"100vw",height:"15vh",background:"grey",display:"flex",justifyContent:"space-around",alignItems:"center",fontSize:"40px"}}>
        <div>Logo</div>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <button style={{fontSize:"40px"}} onClick={()=>{setState(!state)}}>
            {state?"Logout":"Login"}
        </button>
    </nav>

    {/* {state?<Home/>:""} */}
    {state==true && <Home/>}
    {/* {state==true || <Home/>} if first condition is true then it will not check next condition and home will not rendrer */}

    </div>
    </>
  )
}

export default CrEx1