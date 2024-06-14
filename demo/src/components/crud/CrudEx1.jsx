import React, { useState } from 'react'

const CrudEx1 = () => {


  // let [state,setState]=useState({
    //   username:"",
    //   password:"",
    //   list:[]
    // })  //by sir
    
    
    let username;
    let password;
    // let list=[];
  let [state,setState]=useState({
    list:[]
  })//empty object also work because in future new object created everytime when we will use useState() hook

  


  let handleChange=(e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value);
    let {name,value}=e.target

    setState({...state,[name]:value})
    // console.log(state);
  }

  let handleSubmit=(e)=>{
    e.preventDefault()

    // let newObj={
    //   username:state.username,
    //   password:state.password
    // }

    setState({username:"",password:"",list:[...state.list,state]})
    console.log(state);
  }


  return (
    <>
    <div>CrudEx1</div>

    <form action="" onSubmit={handleSubmit} style={{border:"2px solid black" , width:"250px",padding:"50px"}}>

      <input type="text"  onChange={handleChange} name='username' value={username}/><br /><br />
      <input type="text"  onChange={handleChange} name='password' value={password}/><br /><br />
      <button>submit</button>
      <button type='reset'>reset</button>

    </form>

    <div>
        {state.list.length>0 && state.list.map((val,i)=>{
          return(
            <div key={i}>
              <h1>{val.username}</h1>
              <p>{val.password}</p>
            </div>
          )
        })}
    </div>
    </>
  )
}

export default CrudEx1