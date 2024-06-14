import React from 'react'
import WithLoader from './WithLoader'
import Users from './Users'

const HocIntro = () => {


    let UsersWithLoader=WithLoader(Users)

  return (
      <>
      {/* <div>HocIntro</div> */}

      <UsersWithLoader/>
      </>
  )
}

export default HocIntro