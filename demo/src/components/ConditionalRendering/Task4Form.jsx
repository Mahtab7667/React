import React, { useRef } from 'react'

const Task4Form = ({login,setLogin}) => {


    console.log(login);
    console.log(setLogin);

    let myRef1=useRef();
    let myRef2=useRef();

    let handleClick=(e)=>{
        e.preventDefault();
        
        if(myRef1.current.value!="" && myRef2.current.value!=""){
            setLogin(!login)
        }
    }

  return (
    <>
    <div style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <form  style={{width:"280px",height:"300px",display:"flex",flexDirection:"column",borderRadius:"5px",fontSize:"20px",border:"1px solid black",padding:"15px"}}>

            First name: <input type="text" ref={myRef1} style={{height:"30px"}}/>
            Last name:  <input type="text" ref={myRef2}  style={{height:"30px"}}/>

            <button onClick={handleClick} style={{margin:"15px auto",marginTop:"40px",width:"100px",padding:"10px",background:"black",color:"white"}}>Submit</button>
            <button style={{margin:"15px auto",width:"100px",padding:"10px",background:"red",color:"white"}}>Reset</button>
        </form>
    </div>
    </>
  )
}

export default Task4Form