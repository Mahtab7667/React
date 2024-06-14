import React, { useState } from 'react'

const CrudEx2 = () => {


    let [state,setState]=useState({
        username:"",
        password:"",
        list:[]
        })
    let {username,password,list}=state;


    let handleChange=(e)=>{
        let {name,value}=e.target

        setState({...state,[name]:value})
    }


    let handleSubmit=(e)=>{
        e.preventDefault()

        let newObj={
            username:state.username,
            password:state.password
        }
        setState({username:"",password:"",list:[...state.list,newObj]})
        console.log(state);
    }

  return (
    <>
    <div>CrudEx2</div>

    <form action="" onSubmit={handleSubmit} style={{border:"2px solid black" , width:"250px",padding:"50px"}}>

      <input type="text"  onChange={handleChange} name='username' value={username}/><br /><br />
      <input type="text"  onChange={handleChange} name='password' value={password}/><br /><br />
      <button>submit</button>

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

export default CrudEx2