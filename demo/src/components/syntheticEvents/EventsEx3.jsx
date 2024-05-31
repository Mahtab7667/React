import React, { useState } from 'react'

const EventsEx3 = () => {


    let [name,setName]=useState("");
    let [surname,setSurname]=useState("");

    let handleName=(e)=>{
        // console.log(e.target.value);
        setName(e.target.value);
    }

    let handleSurname=(e)=>{
        setSurname(e.target.value)
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
    }

  return (
    <>
        <div>EventsEx3</div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleName}/><br/><br/>
        <input type="text" onChange={handleSurname}/><br/><br/>
        <button >submit</button>
        </form>
        <h1>Name : {name}</h1>
        <h1>Surname : {surname}</h1>
    </>
  )
}

export default EventsEx3