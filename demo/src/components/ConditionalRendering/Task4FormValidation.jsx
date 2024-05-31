import React, {useState} from 'react'

import Task4Form from './Task4Form'
import Task4Dashboard from './Task4Dashboard'

const Task4FormValidation = () => {


    let [isLoggedIn,setIsLoggedIn]=useState(false);


  return (
    <>
    <div>
        {isLoggedIn?<Task4Dashboard/>:<Task4Form login={isLoggedIn} setLogin={setIsLoggedIn}/>}
    </div>
    </>
  )
}

export default Task4FormValidation