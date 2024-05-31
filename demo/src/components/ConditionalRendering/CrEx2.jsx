import React, { useState } from 'react'
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Help from './Help'

const CrEx2 = () => {

    let [state,setState]=useState()
    // let [comp,setComp]=useState(<Home/>)

    // switch (state) {
    //     case "home":
    //         return <Home/>
    //         // setComp(<Home/>)
    //         break;
    //     case 'about':
    //         return <About/>
    //         // setComp(<About/>)
    //         break;
    //     case "contact":
    //         return <Contact/>
    //         // setComp(<Contact/>)
    //         break;
    //     case "help":
    //         return <Help/>
    //         // setComp(<Help/>)
    //         break;
    
    //     default:
    //         console.log("nothing");
    //         break;
    // }

    if(state=="home"){
        return <Home/>
    }

  return (
    <>
    <div>

    <nav style={{width:"100vw",height:"15vh",background:"grey",display:"flex",justifyContent:"space-around",alignItems:"center",fontSize:"40px"}}>
        <div>Logo</div>
        <div onClick={()=>{setState("home")}}>Home</div>
        <div onClick={()=>setState("about")}>About</div>
        <div onClick={()=>{setState("contact")}}>Contact</div>
        <div onClick={()=>{setState("help")}}>Help</div>
    </nav>

     {/* {comp} */}
    </div>
    </>
  )
}

export default CrEx2