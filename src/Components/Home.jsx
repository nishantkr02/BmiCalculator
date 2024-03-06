import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=" flex items-center justify-center w-full  ">
  <div className="bg-[url('/bg4.jpeg')] bg-auto  mx-auto w-full max-w-lg  shadow-2xl rounded-xl px-4 py-4 h-dvh border border-black ">

  <div className='  mx-auto'>

    <img 
    className="mx-auto    rounded-lg   rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
     src="/heart.svg" alt="gender image" 
     
     
     />

</div>



      <div className=" px-5 py-5 ">

        <h1 className="text-2xl  underline font-semibold tracking-tight text-white  ">
         Know Your BMI and BMR
        </h1>
 

    </div> 
<div className=' w-1/3 mx-auto'>
  <Link to='/gender'>
    <img 
    className="mx-auto   shadow     rounded-full px-6 py-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
     src="/clickhere.gif" alt="gender image" 
     
     
     />
     </Link>
</div>


</div>
    
    </div>
  )
}

export default Home