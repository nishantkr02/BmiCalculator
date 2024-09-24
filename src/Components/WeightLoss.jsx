import React from 'react'
import { useNavigate } from 'react-router-dom'

function WeightLoss() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col w-4/5    px-2 mx-auto  border sm:px-6 my-1 shadow-2xl rounded bg-white'>

     <div className=' flex flex-col  justify-between mx-auto max-w-3xl md:w-full  '>

     <div className='mb-2 flex flex-row justify-center '>
          <div className=" w-1/4 flex justify-center items-center mx-auto  mb-4   ">
             <img src='/startclimb.jpg' className='rounded-full object-contain p-2' />
          </div>
          <div className='w-3/4 flex items-center justify-center '>
            <p className='text-gray-600 md:font-medium text-sm md:text-2xl uppercase'>Just Start .<br/> Don't worry that you don't have all the answers yet .</p>
            

          </div>
        </div>





        {/*Topic -1 */}
        <div className='flex flex-col my-2 border-b-2 border-t-2 my-4 '>

            <div className=' flex flex-row w-full  justify-center   mx-auto  py-2 px-1 h-20 mt-2 '>

                <div className='flex w-1/5  justify-start h-20  '>
                    <img src='/thewhy.jpg' className='md:w-full w-full rounded-full object-cover '/>
              </div>
                <div className='flex w-4/5 flex-wrap items-end justify-start  mx-auto  h-20   '>
                    <h1 className='flex text-gray-500 text my-3 font-medium sm:text-2xl px-2  text-sm uppercase items-end '> Why Start a Weight Loss Journey ?</h1>
                </div>

            </div>

             <div className='w-full flex flex-col h-auto   mt-4'>

                <div className='flex flex-wrap h-auto w-full p-2 '>

                  <p className=' justify-start text-lg font-medium text-gray-600 mb-2 underline'>Physical Health Benefits :</p>

                  <p className='  text-sm font-medium text-gray-600 text-left mb-1.5'> 
                    <span className='text-teal-500 '> Improved Overall Health : </span>
                     Losing weight can reduce the risk of chronic diseases like heart disease, stroke,  diabetes, and certain types of cancer. </p>

                  <p className=' text-sm font-medium text-gray-600 text-left mb-1.5'> 
                    <span className='text-teal-500'>Increased Energy Levels : </span>  
                    Shed those extra pounds and experience a boost in energy, making it easier <br/> to tackle daily activities.
                    
                     </p>

                     <p className=' text-sm font-medium text-gray-600 text-left mb-1.5'> 
                    <span className='text-teal-500'> Better Sleep & Enhanced Mobility : </span>  
                    Reducing excess weight can alleviate joint pain and improve mobility, making it easier to move around and enjoy life.
                    It can aslo improve sleep quality, leading to better rest and overall well-being
                    
                     </p>
                </div>

                <div className='flex flex-col h-auto  w-full p-2 '>
                  <p className='flex justify-start text-lg font-medium text-gray-600  mb-2 underline'>Mental Health Benefits:</p>
                  
                  <p className=' text-sm font-medium text-gray-600 text-left mb-1.5'> 
                    <span className='text-teal-500'> Boosted Self-Esteem & Enhanced Body Image : </span>  
                    Achieving weight loss goals can significantly boost self-confidence and body image.
                    A healthier body can lead to a more positive perception of oneself.
                    
                     </p>


                  <p className=' text-sm font-medium text-gray-600 text-left mb-1.5'> 
                    <span className='text-teal-500'>Increased Self-Discipline : </span>  
                    Successfully losing weight can foster a sense of accomplishment and self-discipline.
                    
                     </p>



                     <p className=' text-sm font-medium text-gray-600 text-left mb-3'> 
                    <span className='text-teal-500'>Reduced Risk of Anxiety & Depression : </span>  
                    Studies have shown that weight loss can be effective in reducing the symptoms of anxiety ( such as excessive worry and nervousness) & depression, particularly in individuals who are overweight or obese.
                     </p>
                     <p className=' text-sm font-medium text-teal-500 text-left mb-1'> 
                     <span className='text-pink-500 underline'>Weight Loss and Mental Health : A Note of Caution </span> 
                      It's important to note that while weight loss can be beneficial for mental health, it's not a guaranteed solution for all mental health conditions. If you're struggling with mental health issues, it's essential to seek professional help from a therapist or counselor.
                      </p> 


                </div>
            </div>


        </div>  


        {/*Topic -2*/}
        <div className='flex flex-col my-2 '>

<div className=' flex flex-row w-full  justify-center   mx-auto  py-2 px-1 h-16 '>

    <div className='flex w-1/5 border justify-start h-16  '>
        <img src='/bmi.jpg' className='md:w-full w-full rounded-full object-contain '/>
  </div>
    <div className='flex w-4/5 flex-wrap items-center justify-center  border mx-auto  h-16   '>
        <h1 className='text-gray-500 text my-3  md:text-2xl px-2 uppercase items-center '>Heading 2</h1>
    </div>

</div>

 <div className='flex flex-wrap h-60 items-center justify-center'>
   Details
</div>


          </div> 


          {/*Topic -3*/}
          <div className='flex flex-col my-2 '>

<div className=' flex flex-row w-full  justify-center   mx-auto  py-2 px-1 h-16 '>

    <div className='flex w-1/5 border justify-start h-16  '>
        <img src='/bmi.jpg' className='md:w-full w-full rounded-full object-contain '/>
  </div>
    <div className='flex w-4/5 flex-wrap items-center justify-center  border mx-auto  h-16   '>
        <h1 className='text-gray-500 text my-3  md:text-2xl px-2 uppercase items-center '>Heading 3</h1>
    </div>

</div>

 <div className='flex flex-wrap h-60 items-center justify-center'>
   Details
</div>


          </div> 
          {/*Topic -4*/}
          <div className='flex flex-col my-2 '>

<div className=' flex flex-row w-full  justify-center   mx-auto  py-2 px-1 h-16 '>

    <div className='flex w-1/5 border justify-start h-16  '>
        <img src='/bmi.jpg' className='md:w-full w-full rounded-full object-contain '/>
  </div>
    <div className='flex w-4/5 flex-wrap items-center justify-center  border mx-auto  h-16   '>
        <h1 className='text-gray-500 text my-3  md:text-2xl px-2 uppercase items-center '>Heading 4</h1>
    </div>

</div>

 <div className='flex flex-wrap h-60 items-center justify-center'>
   Details
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