import React from 'react'

const EventsEx4 = () => {

    let handleKeyDown=(e)=>{
        e.target.style.width="100vw"
        e.target.style.background="red"
    }

    let handleKeyUp=(e)=>{
        // e.target.style.width="200px"

    }

  return (
    <>
    <div>EventsEx4</div>
    <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
    </>
  )
}

export default EventsEx4