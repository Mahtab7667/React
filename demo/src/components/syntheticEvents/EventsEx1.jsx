import React from 'react'

const EventsEx1 = () => {

    let handleButton=(e)=>{
        // console.log("Mahtab");
        // console.log(e);
        // console.log(e.target.style);
        e.target.style.background="red"
        e.target.style.color="green"
        e.target.style.width="200px"
    }

    let handleInput=(e)=>{
        // console.log("Mahtab");
        // console.log(e);
        // console.log(e.target.style);
        e.target.style.background="green"
        e.target.style.width="200px"
        e.target.style.height="200px"
    }



  return (
    <>
      <div>EventsEx1</div>

      <button onMouseOut={handleButton}>Click</button>
      
      <input type="text" onMouseOver={handleInput} />

      <h1 onClick={handleButton}>hello</h1>
    </>
  )
}

export default EventsEx1