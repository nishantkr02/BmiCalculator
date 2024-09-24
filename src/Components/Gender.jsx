import React, { useState } from 'react'
import GenderCard from './GenderCard'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { switchToMale,switchToFemale } from '../App/bmiSlice'
import { useNavigate } from 'react-router-dom'

function Gender() {
  const dispatch=useDispatch();
  const gender = useSelector((state)=>state.bmi.gender)
  const[alert,setAlert]= useState(false);
  const navigate = useNavigate()
  const male =()=>{
    dispatch(switchToMale()) ;
 
    setAlert(true);

  }
  const female =()=>{
    dispatch(switchToFemale()) ;
    setAlert(true);
    
  }
  return (
    <div className='flex items-center justify-center w-screen px-2 sm:w-full h-full  mx-auto '>
    <div className={`mx-auto w-full max-w-lg bg-gray-100 shadow-2xl rounded-xl md:px-4 md:py-4 p-1 border border-black `}>

     {/* Logo Div ------ */}
      <div className='mb-2 flex justify-center sm:w-1/3 w-2/5 mx-auto rounded-full px-6  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  '>
       
          <Logo url="/gender.svg" />
      
      </div>

      <h2 className ="text-center text-sm font-medium leading-tight text-teal-500  text-md mb-4">
      <span className='text-2xl font-medium leading-tight text-pink-500'>What is your gender? </span><br/>  ( This allows for more accurate calculations. )</h2>
     {/* Alert */}
   
        {/* 2 divs for 2 card inside link */}
        <div className='flex items-center justify-center w-full mx-auto  mb-4  '>
            <GenderCard url="/batman.svg" name="Male" handler={male} />
            <GenderCard url="/woman.svg" name="Female" handler={female} />

        </div>
        {
          alert?( 
            <div className="p-1 px-4 bg-teal-500 items-center text-white leading-none rounded-full flex inline-flex mt-4 " role="alert">
            <span className="font-semibold mr-2 text-left flex-auto">You are a</span>
              <span className="flex  rounded-full bg-pink-500 uppercase px-2 py-1 text-xs font-bold mr-3">Biological {gender} </span>
             
              <button className=" text-white text-3xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 font-bold rounded-2xl "
              onClick={()=>navigate('/BmiForm')}
              >
              &#10511;
            </button>
            </div>
          ) : (<div></div>)
        }

<div className="flex justify-between my-10 p-4">
<button className="bg-gray-700 w-24 rounded-full hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r" onClick={()=>navigate('/')}>
    Go Back
  </button>

 </div>

   </div>

  </div>
  )
}

export default Gender




  /* return (
    <div className='flex items-center justify-center w-full '>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 shadow-2xl rounded-xl p-10 border border-black/10 `}>

      
        <div className='mb-2 flex justify-center'>
          <span className="inline-block w-fulll max-w-[100px] ">
            <Logo/>
          </span>
        </div>
       <h2 className ="text-center text-2xl font-bold leading-tight">
        Sing in to Your Account</h2>

        <p className =" mt-2 text-center text-base text-black/60">
          Dont&apos;t have any account ?&nbsp;
          <Link
          to="/signup"
          className="font-medium text-primary transition-all duration-200 hover-underline ">
            Sign Up
          </Link>

        </p>

        { error && <p className='text-red-600 mt-8 text-center'>
          {error}
        </p> }
        
        Note : handleSubmit here is a keyWord from the useForm hook we just pass our own handler funtion of a different name to this handleSubmit as an argument 
       

      </div>

    </div>
  )
}
 */
