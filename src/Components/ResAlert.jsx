import React from 'react'
import { Link } from 'react-router-dom'

function ResAlert({col="purple",heading,msg}) {
  return (
    
  

         <div className={`p-1 bg-indigo-200 items-center text-${col}-100 leading-none lg:rounded-full flex lg:inline-flex mt-3 shadow  rounded-xl `}role="alert">
    <span className={`flex rounded-full ${col} uppercase px-2 py-2 text-white text-xs font-bold ml-1 mr-4  shadow-2xl border border-2 border-orange-400 `}> {heading}</span>
    <span className="font-semibold mr-2 text-left text-black flex-auto">{msg}</span>
    <Link to='https://www.healthifyme.com/blog/bmi-calculator/' >
    <svg className={`fill-current h-6 w-6 text-white m-2 rounded-full ${col} mr-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
    </Link>
  </div>




  )
}

export default ResAlert