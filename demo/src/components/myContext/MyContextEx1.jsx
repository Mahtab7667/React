import { createContext, useState } from 'react'
export let contVar=createContext();
import img1 from './imgs/avatar.png'
import img2 from './imgs/first.jpeg'
import img3 from './imgs/second.jpeg'
import img4 from './imgs/third.jpeg'
import img5 from './imgs/fourth.jpeg'
// import img from './imgs'


const MyContextEx1 = (props) => {

    // let[context,setContext]=useState([])

    // console.log(context);

    return (
    <>
    <div>MyContextEx1</div>


    <contVar.Provider value={{img1,img2,img3,img4,img5}}>{props.children}</contVar.Provider>
    
    </>
  )
}

export default MyContextEx1