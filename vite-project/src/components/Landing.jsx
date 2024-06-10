import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {


  return (
    <>
    <div style={{fontSize:"30px",color:"white",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

    <h1>Landing</h1>
    <Link to="/home">click to go on home</Link>
    </div>
    </>
  )
}

export default Landing