import React from 'react'
import { useSelector } from 'react-redux'

function GenderCard({url,name,handler}) {
 
  return (
    <div className="w-full  border py-7  rounded-lg shadow-2xl bg-gray-700 border-gray-700 m-2">
    
        <img 
        className=" shadow-xl sm:w-3/4 w-full   rounded-t-lg hover:bg-red-500  rounded-full px-6 py-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
         src={url} alt="gender image" 
         onClick={handler}
         />
   
   
    {/* <div className="px-5 p-5">
        <a href="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
        </a>
    
    </div> */}
</div>
  )
}

export default GenderCard