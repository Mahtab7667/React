import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav style={{border:"1px solid black",display:"flex",justifyContent:"space-around",alignItems:"center",height:"15vh",background:"lightGreen",fontSize:"25px",color:"white"}}>
           <Link to="/home/item1">item1</Link>
           <Link to="/home/item2">item2</Link>
           <Link to="/home/item3">item3</Link>
           <Link to="/home/item4">item4</Link>
           <Link to="/home/item5">item5</Link>
           <Link to="/home/item6">item6</Link>
        </nav>  
    </>
  )
}

export default Navbar