import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
        const navigate = useNavigate();
  return (
    <div className='flex flex-wrap w-screen px-4 border  sm:w-3/4 w-full  mx-auto  border sm:px-6 my-1 shadow-2xl rounded bg-white'>

         <div className=' flex flex-row w-full justify-between mx-auto    '>



            <div className=' flex flex-col w-full justify-center mx-auto  py-2 px-1 '>
            <div className='flex w-full  justify-center '>
                    <img src='/bmi.jpg' className='md:w-full w-full object-contain '/>
            </div>
            <div className='flex flex-wrap  w-12 mx-auto justify-center mb-4'>
                    <h1 className='text-gray-500 text my-3  text-2xl px-2'>BMI</h1>
            </div>
            </div>
            
            <div className=' flex flex-col w-full justify-center mx-auto  py-2 px-1 '>

            <div className='flex w-full  justify-center '>
                    <img src='/BMR.jpg' className='w-full object-contain'/>
            </div>
            <div className='flex flex-wrap  w-1/4 mx-auto justify-start mb-4'>
                    <h1 className='text-gray-500 text my-3 text-center text-2xl'>BMR</h1>
            </div>
        </div>
        
           
        </div>

        <div className='flex flex-row w-full  mx-auto  my-2 '>
        <div className='flex   mx-auto'>
               <button 
               className='bg-teal-500  px-6 py-2 rounded-full text-lg font-medium text-white  hover:bg-pink-500 hover:-translate-y-1 duration-100'
               onClick={()=>navigate('/gender')}
               >Take the First Step in Your Health Journey

               </button>
        </div>
          
        </div>

        
         <div className=' flex flex-row w-full max-w-xl justify-center mx-auto  py-2  '>

            <div className=' flex flex-col w-full justify-center items-center mx-auto  py-2 mb-2  '>


            <div className='flex w-full  justify-center items-center  h-48 md:mt-4 -mt-5 '>
                    <img src='/idealBMI.jpg' className='md:object-fill object-contain w-full  md:-mb-8  '/>
            </div>
            
            <div className='flex flex-wrap px-2  items-end justify-start mb-6 md:mt-4  '>
                    <h1 className='text-gray-500 text my-3 text-center text-2xl '>Ideal BMI and Weight Range</h1>
            </div>
            
            </div>
          
            <div className=' flex flex-col w-full justify-center items-center mx-auto  py-2 mb-2'>

            <div className='flex w-full  justify-center h-48 '>
                    <img src='/maintainanceCal.jpg' className='w-full  sm:object-fill object-contain'/>
            </div>
            <div className='flex flex-wrap   items-end justify-start mb-8 mt-2'>
                    <h1 className='text-gray-500 text my-3 text-center text-2xl'>Maintance Calories or TDEE</h1>
            </div>
        </div>
        
           
        </div>
        </div>  
  )
}

export default Home