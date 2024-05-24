import React, {useState} from 'react'


function UseStateEx2(){

    let result = useState(false);
    let [toggle,setToggle]=result;

    let handleToggle=()=>{
        // if(toggle){
        //     setToggle(false)
        // }
        // else{
        //     setToggle(true)
        // }

        setToggle(!toggle);
    }


    return(
        <>
        <button onClick={handleToggle}>{toggle?'ON':'OFF'}</button>
        </>
    )
}

export default UseStateEx2;