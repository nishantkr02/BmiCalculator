import React from 'react'
import { useNavigate } from 'react-router-dom'

function WeightLoss() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col  md:w-2/3 w-full px-2 mx-auto  border sm:px-6 my-1 shadow-2xl rounded bg-white'>

     <div className=' flex flex-col w-full justify-between mx-auto max-w-xl border  '>

     <div className='mb-2 flex flex-row justify-center'>
          <div className=" flex justify-center items-center mx-auto max-w-[200px] mb-4 ">
             <img src='/beginFitnes.jpg' className='w-full rounded-3xl object-contain' />
          </div>
          <div className='flex items-center justify-center -mt-4'>
            <p className='text-gray-600 font-bold text-2xl'>Here, I will share every aspect of the weight loss journey.<br/> Stay tuned!</p>
            

          </div>
        </div>





        {/*Topic -1 */}
        <div className='flex flex-col my-2 '>

            <div className=' flex flex-row w-full  justify-center   mx-auto  py-2 px-1 '>

                <div className='flex w-1/4 border justify-start'>
                    <img src='/bmi.jpg' className='md:w-full w-full object-contain '/>
              </div>
                <div className='flex w-3/4 flex-wrap  border mx-auto justify-center items-center '>
                    <h1 className='text-gray-500 text my-3  text-2xl px-2'>Heading</h1>
                </div>

            </div>

             <div className='flex flex-wrap h-60 items-center justify-center'>
                Here the gyan will go
            </div>


        </div>  


        {/*Topic -2*/}
        <div className='flex flex-col '>

            <div className=' flex flex-row w-full  justify-center   mx-auto  py-2 px-1 '>

                <div className='flex w-1/4 border justify-start'>
                    <img src='/bmi.jpg' className='md:w-full w-full object-contain '/>
              </div>
                <div className='flex w-3/4 flex-wrap  border mx-auto justify-center items-center '>
                    <h1 className='text-gray-500 text my-3  text-2xl px-2'>Heading</h1>
                </div>

            </div>

             <div className='flex flex-wrap h-60 items-center justify-center'>
                Here the gyan will go
            </div>


        </div> 





      </div>


    <div className=' flex w-full'>
    <button className="bg-gray-800 w-24 rounded-full hover:bg-gray-400 text-white font-bold py-2 px-4 " onClick={()=>navigate('/')}>
    Home
  </button>
    </div>
      
    </div>     
  )
}

export default WeightLoss