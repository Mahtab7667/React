import React from 'react'

const Map2Child = ({props="default"}) => {

  console.log(props);

  return (
    <>
      <div className='card'>
        <img src={props.avatar_url}/>
        <h1>{props.login}</h1>
        <div className='id-type'>
        <p>id: {props.id}</p>
        <p className='type'>{props.type}</p>
        </div>
      </div>
    </>
  )
}

export default Map2Child