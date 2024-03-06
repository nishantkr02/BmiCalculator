import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { useSelector } from 'react-redux'
import ResAlert from './ResAlert';
import { Link, useNavigate } from 'react-router-dom';
function Result() {
  const navigate = useNavigate();
  const data = useSelector((state)=>state.bmi.userData);
  const gender = useSelector((state)=>state.bmi.gender) ;
  const unit =useSelector((state)=>state.bmi.unit)
  const [bmi,setBmi]= useState(0);
  const [iwLow,setIwLow]=useState(0);
  const [iwHigh,setIwHigh]=useState(0);
  const [res,setRes]=useState({col:"",heading:"",msg:""})
  const [bmr,setBmr]= useState(0);

  let dailyCaloriIntake =0 ;

  useEffect(()=>{
   
    console.log("current unit",unit);

    if(unit==="Metric"){
     //Bmi Calculation
      let height =(data.height)/100 ;
      //let hm=height; //for ideal weight cal
      console.log("age",data.age)
      console.log("Height",data.height)
      let weight =data.weight ;
      console.log("total height before square in Meters :",height)
      height=height*height ;
      let res =(weight/height).toFixed(2) ;
      setBmi(res);
      console.log("Bmi Calc",res);

      //ideal weigth Cal
      let resIw = 18.5 * height ;
      setIwLow(resIw.toFixed(2))

      resIw = 24.9 * height 
      setIwHigh(resIw.toFixed(2))
      console.log("Ideal weigh Calc",resIw);

      //BMR Calculation ;
      if(gender==="Male"){
        let bmrD = 66.47 + (13.75*weight) +(5.003 * data.height ) - (6.755 * data.age)
        bmrD =bmrD*1.2  ;
        setBmr(bmrD.toFixed(2)) ;
      }
      else{
        let bmrD = 655.1 + (9.563 * weight) +(1.850 * data.height ) - (4.676 * data.age)
        bmrD =bmrD*1.2  ;
        setBmr(bmrD.toFixed(2)) ; ;
      }
   
    }
    else{
      let height =(data.height)
      console.log("total height before square in feet ",height);
      console.log("age",data.age)
      let weight =data.weight ;
      let hInch =Math.trunc(height) ;
      let totalH = (hInch*12) + (height-hInch)*10 
      console.log("total height before square in Inch",totalH);
      let hI = totalH ; //for idea weight cal
      totalH= totalH*totalH ;
      let res =703*(weight /totalH).toFixed(2) ;
      setBmi(res)
      ////ideal weigth Cal
     
      let resIw = (18.5 * totalH )/703 ;
      setIwLow(resIw.toFixed(2))

      resIw = (24.9 * height )/703
      setIwHigh(resIw.toFixed(2))

      // BMD
       if(gender==="Male"){
        let bmrD = 66.47 + (13.75*weight)/2.205 +(5.003 * hI *2.54 ) - (6.755 * data.age)
        bmrD =bmrD*1.2  ;
        setBmr(bmrD.toFixed(2)) ;
      }
      else{
        let bmrD = 655.1 + (9.563 * weight)/2.205 +(1.850 * hI *2.54) - (4.676 * data.age)
        bmrD =bmrD*1.2  ;
        setBmr(bmrD.toFixed(2)) ;
      }

    }

//
  },[data]);
//setting msg 
    useEffect(()=>{

console.log("here the BMI is :",bmi);
if(bmi<18.5){
  setRes({col:"bg-orange-500",heading:"UnderWeight",msg:"Dude You skinny as fuck , eat Healthy and Work out "}) ;
}
else if(bmi>18.5 && bmi<24.9)
setRes({col:"bg-green-500",heading:"Perfect",msg:"Bravo ! You are in Prefectly Shape . keep it up ."})

else if(bmi>25 && bmi<29.9)
setRes({col:"bg-purple-500",heading:"Attention",msg:"Hey You're getting Fat !, It's time to Hit the Gym . "})

else if(bmi>30 )
setRes({col:"bg-red-700",heading:"Danger",msg:"You're are Obese ,Work on yourself .."})

else 
setRes({col:"bg-yellow-500",heading:"Error",msg:"Something Unexpected occured"})


    },[bmi])






    return (

<div className='flex items-center justify-center w-full  '>
  <div className={`mx-auto w-full max-w-lg bg-gray-100 shadow-2xl rounded-xl p-10 border border-black `}>
    
         {/* Logo Div ------ */}
          <div className='mb-2 flex justify-center sm:w-1/3  w-1/2 mx-auto  mx-auto rounded-full px-6  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'>
           
         <Logo url="/report.svg" />
          
          </div>

          <div className=" w-full mx-auto  items-center text-white leading-none  lg:rounded-full flex lg:inline-flex" role="alert">
          <span className=" rounded-full bg-red-500 px-4 py-2  text-md mx-auto justify-center"> Hey   {gender==="Male"?("Ninja 🐱‍👤 "):("Queen 👸🏻")} , Here's Your Report Card </span>
          </div>
          {/* Here goes Use data */}
    
  
     <div className="w-full max-w-sm   rounded-full shadow-2xl bg-green-100 mt-2 mx-auto">
     <div className="flex flex-col items-center pb-10">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={gender==="Male"?("/male.svg "):("/female.svg")}
       alt="Image"/>

      <h5 className="mb-1 text-xl font-medium text-red-900 ">{data.name}</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">Age :{data.age} Yrs</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">Weight :{data.weight} {unit==="Metric"?("Kg"):("Lbs")}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">Height :{data.height} {unit==="Metric"?("cm"):("ft")}</span>
    
      
    </div>
   </div>
 {/* Div For Analysis the BMi and tips */}
      <ResAlert col={res.col} heading={res.heading} msg={res.msg} />
    
  {/* 3 divs for 3 card inside link */}
   <div className='flex  justify-center w-full p-2 mb-2 '>

   <div className="w-full  mx-auto px-2  rounded-lg ">
        <img 
        className=" mx-auto shadow-lg sm:w-3/4 w-3/4 rounded-t-lg   rounded-full px-4 py-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
         src="/bmi.png" alt="gender image" 
         
         />
            <h5 className=" font-semibold tracking-tight text-red-700 py-5 ">
             Body Mass Index  <br/> <span className='text-blue-500'>{bmi}  </span> 
            </h5>
   
     </div>


      {/* Image 2*/}          
      <div className="w-full  mx-auto px-2 rounded-lg    ">
        <img 
        className=" mx-auto  shadow-lg sm:w-3/4 w-3/4  rounded-t-lg   rounded-full px-4 py-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
         src="/weight.svg" alt="weight" 
       
         />
            <h5 className="  py-5 font-semibold tracking-tight text-red-700  ">
              Ideal Weight <br/>     <span className='text-blue-500'> {iwLow}-{iwHigh} {unit==="Metric"?("Kg"):("Lbs")}</span>
            </h5>

    
     
     </div>


     {/* Image 3 */}
     <div className="w-full  mx-auto  rounded-lg ">
        <img 
        className=" mx-auto shadow-lg sm:w-3/4 w-3/4 rounded-t-lg   rounded-full px-4 py-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
         src="/foodintake.svg" alt="gender image" 
         
         />
            <h5 className=" font-semibold tracking-tight text-red-700 py-5 ">
             Maintainance Cal   <br/> <span className='text-blue-500'>{bmr} Kcal </span> 
            </h5>
   
     </div>


   </div>

   


   {/* Info Divs */}        
    <div className="flex items-center  bg-red-500 text-white text-sm font-bold px-4 py-2 mb-2 rounded-xl " >
   <p className='text-center mx-auto'> Here is the detail Explanation of Your report .</p>
   <Link to={'/about'} >
    <svg className="fill-current w-4 h-4 mr-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg> </Link>
    </div>
    <img className='mb-4' src='/bmichart.jpg' alt='bmichart' />
    <div className="bg-grey-200 text-left border-t border-b border-blue-500 text-blue-500 px-4 py-2 mb-2" role="alert">
  
   <p className="text-sm"> <span className="font-bold text-red-500">Ideal Weight &#10511;</span> Ideal Weight according to your height ,calculated assuming the Healthy BMI Range(18.5 -24.9) </p>
   <p className="text-sm"> <span className="font-bold text-red-500">Maintainance Cal &#10511;</span> The required Daily Calories  to maintain your current weight .</p>
   </div>

   <div className="flex justify-between mt-2">
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={()=>navigate('/bmiForm')}>
    Prev
  </button>
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r "onClick={()=>navigate('/')}>
    Home
  </button>
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r "onClick={()=>navigate('/about')}>
    Next
  </button>
</div>  
         
     
         
         



</div>
    
</div>








      )
}

export default Result