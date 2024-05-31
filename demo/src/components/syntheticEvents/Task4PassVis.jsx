import React from 'react'

const Task4PassVis = () => {


    let flag=0;
    let handlePassVisibility=(e)=>{
        let pass=document.querySelector('.pass');
        if(flag==0){
            pass.type="text"; 
            flag++;
        }
        else{
            pass.type="password"
            flag--;
        }
    }

  return (
    <>
    <div>Task4PassVis</div>

    <input type="password"  style={{color:"black"}} className='pass' />
    <input type="checkbox" onClick={handlePassVisibility}/>
    </>
  )
}

export default Task4PassVis