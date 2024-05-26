import React from 'react'
// import Child1 from './Child1.jsx'

 const Child = (props) => {

    console.log(props)
    console.log(props.props.a)
    props.props.fun();

  return (
    <>
    <div>Child</div>
    {/* <Child1 props={props}/> */}
    </>
  )
}

export default Child;
