import React from 'react'
import { Link } from 'react-router-dom'

function ResAlert({col="purple",heading,msg}) {
  return (
    
  

         <div className={`p-1  items-center bg-gray-800 leading-none lg:rounded-full flex lg:inline-flex mt-3 shadow  rounded-full py-4  `}role="alert">
    <span className={`flex rounded-full ${col} uppercase px-4 py-2 text-white text-xs font-bold ml-1 mr-4  `}> {heading}</span>
    <span className="font-semibold mr-2 text-left text-white flex-auto">{msg}</span>
    
  </div>




  )
}

export default ResAlert