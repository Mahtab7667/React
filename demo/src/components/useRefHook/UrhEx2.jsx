import React, { useRef } from 'react'

const UrhEx2 = () => {


    let yelow=useRef()
    let grey=useRef()
    let red=useRef()
    let green=useRef()
    let orange=useRef()

    // console.log(useRef()); return an object with current:undefined this single pair. basically in red,yelow and more object coming from useRef() and after that it stores therefrence/address of any tag.

    let handleGray=()=>{
        console.log("gray clicked");
      //   console.log(yelow);
      //  console.log(yelow.current);
       yelow.current.style.background="pink"
    }

    let handleOrange=()=>{
        console.log("orange clicked");
        grey.current.style.background="green"
    }

    let handleYellow=()=>{
      console.log("yellow cicked");
      red.current.style.background="blue"
    }

    let handleRed=()=>{
      console.log("red clicked");
      green.current.style.background="orange"
    }

    let handleGreen=()=>{
      console.log("green clicked")
      orange.current.style.background="red"
    }



  return (
    <>
    <nav  ref={grey} onClick={handleGray} style={{height:"15vh",background:"grey",display:"flex",justifyContent:"space-around",alignItems:"center",fontSize:"40px"}}>
       
    </nav>

    <main style={{height:"65vh",background:"grey",display:"flex",justifyContent:"space-around",alignItems:"center",fontSize:"40px"}}>

        <div  ref={orange} onClick={handleOrange} style={{height:"100%",width:"100%",background:"orange"}}></div>

        <div ref={yelow} onClick={handleYellow} style={{height:"100%",width:"100%",background:"yellow"}}></div>

        <div ref={red} onClick={handleRed} style={{height:"100%",width:"100%",background:"red"}}></div>
    </main>

    <footer onClick={handleGreen} ref={green} style={{height:"65vh",background:"green"}}>

    </footer>
    </>
  )
}

export default UrhEx2