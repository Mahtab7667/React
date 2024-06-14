import React, { memo } from 'react'

const UseCallbackEx1Child = (props) => {


    console.log("child component");

    console.log(props);


  return (
    <>
    <div>UseCallbackEx1Child</div>
    </>
  )
}

export default memo(UseCallbackEx1Child)
// export default UseCallbackEx1Child