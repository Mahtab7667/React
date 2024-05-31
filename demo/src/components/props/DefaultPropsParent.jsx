import React from 'react'
import DefaultpropsChild from './DefaultpropsChild'

export const DefaultPropsParent = () => {


    let car="Fortuner"


  return (
    <>
     <div>DefaultPropsParent</div>
    {/* <DefaultpropsChild props={car}/> */}
    <DefaultpropsChild />
    </>
  )
}

export default DefaultPropsParent;
