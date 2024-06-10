import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Item1 = () => {

  let navigator=useNavigate();// useNavigate simple like use state just stote it value in any variable and then use that varibale to set something.

  console.log(navigator); // returns a function with two parameter which are  (to,options)

  let handleSubmit=(e)=>{
    e.preventDefault();
    navigator("/home/item2")
  }


  return (
      <>
    <div style={{border:"2px solid black",width:"75vw",display:"flex",flexDirection:"column",fontSize:"30px",backgroundColor:"yellow"}}>
      <div>Item1</div>

      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",marginTop:"20px",fontSize:"30px",gap:"10px"}}>
      Username: <input type='text' style={{width:"200px",height:"30px",borderRadius:"5px"}}/>
      Password: <input type='text' style={{width:"200px",height:"30px",borderRadius:"5px"}}/>
      <input type="submit" value="submit form"  style={{width:"200px",height:"30px",borderRadius:"5px"}}/>

      {/* <Link to="/home"><button>click</button></Link> */}
      {/* we can also use link instead of changing path on onSubmit or any other events  */}
      </form>
    </div>
      </>
  )
}

export default Item1