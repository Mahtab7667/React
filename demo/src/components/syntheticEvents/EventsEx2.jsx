import React from 'react'

const EventsEx2 = () => {



    
    let handleEnter=(e)=>{
        e.target.style.background="green"
    }

    let handleLeave=(e)=>{
        e.target.style.background="yellow"
    }


  return (
    <>
     <div>EventsEx2</div>

<div style={{display:"flex",flexWrap:"wrap"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}>
     <div style={{width:"100px",height:"100px", border:"1px solid black"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}></div>
     <div style={{width:"100px",height:"100px", border:"1px solid black"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}></div>
     <div style={{width:"100px",height:"100px", border:"1px solid black"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}></div>
     <div style={{width:"100px",height:"100px", border:"1px solid black"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}></div>
     <div style={{width:"100px",height:"100px", border:"1px solid black"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}></div>
     <div style={{width:"100px",height:"100px", border:"1px solid black"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}></div>
     <div style={{width:"100px",height:"100px", border:"1px solid black"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}></div>
     <div style={{width:"100px",height:"100px", border:"1px solid black"}} onMouseEnter={handleEnter}  onMouseLeave={handleLeave}></div>
</div>
    </>
  )
}

export default EventsEx2