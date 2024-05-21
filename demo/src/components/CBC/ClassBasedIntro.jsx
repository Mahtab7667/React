import React, {Component} from 'react'
// import ClassBasedEx1 from './ClassBasedEx1.jsx'
// import ClassBasedEx2 from './ClassBasedEx2.jsx'
// import ClassBasedEx3 from './ClassBasedEx3.jsx'
// import ClassBasedEx4 from './ClassBasedEx4'
import ClassBasedEx5RandomNumGen from './ClassBasedEx5RandomNumGen'

export default class ClassBasedIntro extends Component {

    constructor(){
        // super() - it connects with parent constructor
        super()
    }


    render(){
        return(
             <div>
            {/* <ClassBasedEx1/> */}
            {/* <ClassBasedEx2/> */}
            {/* <ClassBasedEx3/> */}
            {/* <ClassBasedEx4/> */}
            <ClassBasedEx5RandomNumGen/>
             </div>
        )
    }
}