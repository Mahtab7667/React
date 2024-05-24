import React from 'react'
import Child2 from './Child2.jsx'

 const Child1 = (props) => {

    // console.log(props)
    // console.log(props.props.props.a)
    // props.props.fun();

  return (
    <>
    <div>Child1</div>
    <Child2 props={props}/>
    </>
  )
}

export default Child1;
