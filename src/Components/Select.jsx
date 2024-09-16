import React, { useId } from 'react'

function Select(
    {
    options,
    label,
    className='',
    ...props
},selectRef) 
{
 const id = useId()

  return (
    <div className='w-auto'>
   { label && 
    <label  className='flex inline-block justify-start mb-1 pl-1 text-lg font-bold text-gray-500 overflow-clip' htmlFor={id}> {label} </label> }
    <select
    {...props}
    id={id}
    ref={selectRef}
    className={`sm:px-3 sm:py-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} focus:border-purple-500`}
    > 
    {
        options ?.map((optionValue)=>(
            <option key={optionValue}> {optionValue} </option>
        ))
    }
    </select>


    </div>
  )
}

export default React.forwardRef(Select)