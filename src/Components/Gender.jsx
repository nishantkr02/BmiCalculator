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
    <div className='flex items-center justify-center w-full h-full '>
    <div className={`mx-auto w-full max-w-lg bg-gray-100 shadow-2xl rounded-xl px-4 py-4 border border-black `}>

     {/* Logo Div ------ */}
      <div className='mb-2 flex justify-center sm:w-1/3 w-1/2 mx-auto rounded-full px-6  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 '>
       
          <Logo url="/mflogo.svg" />
      
      </div>

      <h2 className ="text-center text-2xl font-bold leading-tight">
      Choose Your Gender </h2>
     {/* Alert */}
   
        {/* 2 divs for 2 card inside link */}
        <div className='flex items-center justify-center w-full mx-auto p-4 mb-4   '>
            <GenderCard url="/male.svg" name="Male" handler={male} />
            <GenderCard url="/female.svg" name="Female" handler={female} />

        </div>
        {
          alert?( 
            <div className="p-1 px-4 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">
            <span className="font-semibold mr-2 text-left flex-auto">You Have Selected </span>
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">{gender} ✔</span>
             
              <button className=" text-white text-3xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 font-bold rounded-2xl shadow-xl"
              onClick={()=>navigate('/BmiForm')}
              >
              &#10511;
            </button>
            </div>
          ) : (<div></div>)
        }

<div className="flex justify-between">
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={()=>navigate('/')}>
    Prev
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
