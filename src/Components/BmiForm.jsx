import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { useForm } from 'react-hook-form'
import Input from './Input';
import { addData, switchUnit } from '../App/bmiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function BmiForm() {
  const gender = useSelector((state)=>state.bmi.gender);
  const [unit,setUnit]=useState("Metric") ;
  const [check,setCheck]=useState(true)
  const [nextPage,setNextPage] =useState(false) ;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
      dispatch(switchUnit(unit)) ;
  },[])
  const hadlerToggle =()=>{
    setCheck((prev)=>!prev)
    if(unit==="Metric"){
      setUnit("Standard") ;
      dispatch(switchUnit("Standard"))
     
    }
    else{
      setUnit("Metric") ;
      dispatch(switchUnit("Metric"))
    }
     
  }




  const {register,handleSubmit,getValues} = useForm({
    defaultValues:{
      name:"",
      age :"",
      weight:"",
      height :"",
      
    },
  });
  
  const submit =(data)=>{
    //const userData = getValues();
   // dispatch(addData({name:data.name,age:data.age,weight:data.weight,height:data.height})) ;
   dispatch(addData(data)) ;
    navigate('/result') ;
    setNextPage(true) ;
    console.log("Form submitted");
    console.log("Form Data" ,data);
    console.log("Gender data in the store ",gender)
    
  }


  return (
    <div className='flex items-center justify-center w-full  '>
    <div className={`mx-auto w-full max-w-lg bg-gray-100 shadow-2xl rounded-xl px-4 py-4 border border-black `}>

     {/* Logo Div ------ */}
      <div className='mb-2 flex justify-center sm:w-1/3 w-1/2  mx-auto rounded-full px-6  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 '>
       
          <Logo url="/info.svg" />
      
      </div>
      
    {/* Greet  */}
   
      <div className=" w-full mx-auto  items-center text-indigo-100 leading-none  lg:rounded-full flex lg:inline-flex" role="alert my-2">
       <span className=" rounded-full bg-indigo-600 px-4 py-2  text-md mx-auto justify-center my-2"> Hey  {gender==="Male"?("Ninja 🐱‍👤 "):("Queen 👸🏻")} , Let's Get to know you </span>
    
      
     </div>
   


      <form onSubmit={handleSubmit(submit)} className=" w-full mx-auto  mb-4 pb-2 h-96">
      <div className="w-full px-2 justify-center mx-auto flex  pb-2">
      <Input 
      label ="Name : "
      type='name'
      placeholder ="Your Full Name "
      
      {
        ...register("name",{required:true})
      }
      />
       <Input 
      label ="Age : "
      type='age'
      placeholder ="Your Age "
    
      {
        ...register("age",{required:true})
      }
      />
      </div>
    
      <div className='flex felx-wrap mx-auto justify-center'>
     
      <Input 
      label ={`Weight :(in ${unit==="Metric"?("Kg"):("Lbs")}) `}
      type='weight'
      placeholder ="Your Weight"
     
      {
        ...register("weight",{required:true})
      }
      />
      <Input 
      label ={`Height :(in ${unit==="Metric"?("cm"):("Ft")}) `}
      type='height'
      placeholder ="Your Height "
 
      {
        ...register("height",{required:true})
      }
      />

      </div>

        {/* Toggle----  */}
      <div className=' inset-y-5 right-0  mx-auto mb-4  '>
     <label className="inline-flex items-center  cursor-pointer mx-auto">
     <span className=" text-sm font-medium text-gray-900 dark:text-gray-800 mx-2">Current Unit :   </span>
      <input type="checkbox" value={unit} className="sr-only peer" checked={check} onChange={hadlerToggle}/>
       <div className="relative w-12 h-6  bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-indigo-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
       <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-800">{unit}</span>
     
     </label>
     </div>

      <button type='submit'  className='bg-green-700 text-white font-bold px-4 mt-4 py-2 rounded-2xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 ' >Submit </button>
      </form>

      <div className="flex justify-between">
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={()=>navigate('/gender')}>
    Prev
  </button>

  { nextPage ? ( <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r "onClick={()=>navigate('result')}>
    Next
  </button>)  :(<></>)}
         


      </div>
      </div>
      </div>
  )
}

export default BmiForm