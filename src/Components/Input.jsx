import React, { useId } from 'react'

const Input = React.forwardRef(function Input({label,type="text",...props},ref) {
    const id= useId()
  return (
    <div className='flex flex-wrap mb-1 pl-1 py-2'>
    <div className="md:items-center flex flex-wrap mb-3   ">
    <div className="md:w-1/3  ">
      <label className="text-gray-500 font-bold text-left mb-1" 
      htmlFor={id}>
        {label}
      </label>
    </div>
    <div className="md:w-2/3 items-center ">
      <input 
      className="bg-white text-xs border border-gray-100  rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      type={type}
      id={id}
      ref={ref}
      {...props}
     />
    </div>
  </div>
    </div>
  )
} )

export default Input