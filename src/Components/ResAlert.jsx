import React from 'react'
import { Link } from 'react-router-dom'

function ResAlert({col="purple",heading,msg}) {
  return (
    
  

         <div className={` items-center bg-teal-500 leading-none lg:rounded-full flex lg:inline-flex mt-3 shadow  rounded-full py-4  `}role="alert">
           <span className={`flex rounded-full ${col} uppercase px-4 py-2 text-white text-xs font-bold ml-1 mr-4 border-2 border-white `}> {heading}</span>
           <span className="font-medium mr-2 text-left text-white text-xs sm:text-sm flex-auto">{msg}</span>
    
         </div>




  )
}

export default ResAlert