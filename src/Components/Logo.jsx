import React from 'react'

function Logo({url}) {
  return (
    <div className='mb-2 flex justify-center'>
        <img className="rounded-t-lg" src={url} alt="gender image" /> 
    </div>
  )
}

export default Logo