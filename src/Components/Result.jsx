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
  const convertToCm = (height)=>{
            // Here the conversion from Standard(imperial or US)
        let hFeet =Math.floor(height) ;
        let hInch = Math.round((height - hFeet) * 10);
        let totalInches =  (hFeet * 12) + hInch;
         let hCm = totalInches * 2.54;

         return hCm ;
  }
  function convertPoundsToKg(weightInPounds) {
    const poundsToKgConversionFactor = 0.45359237;
    let weightInKg = weightInPounds * poundsToKgConversionFactor;
    return weightInKg.toFixed(2); // Round to 2 decimal places
}
const activityFactors = {
  "Sedentary:Little or no exercise": {
      description: "Little or no exercise",
      factor: 1.2
  },
  "Lightly Active:Light exercise/sports 1-3 days/week": {
      description: "Light exercise/sports 1-3 days/week",
      factor: 1.375
  },
  "Moderately Active:Moderate exercise/sports 3-5 days/week": {
      description: "Moderate exercise/sports 3-5 days/week",
      factor: 1.55
  },
  "Very Active:Hard exercise/sports 6-7 days a week": {
      description: "Hard exercise/sports 6-7 days a week",
      factor: 1.725
  },
  "Super Active:Very hard exercise/physical job & exercise 2x/day": {
      description: "Very hard exercise/physical job & exercise 2x/day",
      factor: 1.9
  }
};


  useEffect(()=>{
   
    console.log("current unit",unit);
    console.log("form Data",data);
    


    const activityLevelKey=data.activityLevel;
    console.log("Activity level key",activityLevelKey)
    let activity = activityFactors[activityLevelKey.toString()];
    
     //Bmi Calculation
      let height =data.height ;
     
      let weight =data.weight ;

        if(unit==="Imperial"){
          height =Math.floor( convertToCm(height));
          console.log("Height after coversion",height)
          weight = Math.floor(convertPoundsToKg(weight) ) ;
          console.log("weight after coversion",weight)
        }
        
      
      let heightInMeter =(height)/100 ;
      let heightSqr=heightInMeter*heightInMeter ;
      let res =(weight/heightSqr).toFixed(2) ;
      setBmi(res);
      console.log("Bmi Calc",res);

      //ideal weigth Cal
      let lowIw = 18.5 * heightSqr ;
      setIwLow(lowIw.toFixed(2))
       
     let highIw = 24.9 * heightSqr  ; 
      setIwHigh(highIw.toFixed(2))
      console.log("Ideal weigh Calc",highIw);

      //BMR Calculation ;
      if(gender==="Male"){
        let bmrD =  (10*weight) +(6.25 * height ) - (5 * data.age)+5
        console.log('BMRD :: ',bmrD)
        bmrD =bmrD* (activity.factor || 1.2) ;
        console.log('BMRD :: ',bmrD)
        setBmr(bmrD.toFixed(2)) ;
      }
      else{
        let bmrD =  (10*weight) +(6.25 * height ) - (5 * data.age)-161
        bmrD =bmrD* (activity.factor || 1.2) ;
        setBmr(bmrD.toFixed(2)) ;
      }

      
   
   
//
  },[data]);
//setting msg 
    useEffect(()=>{

console.log("here the BMI is :",bmi);
if(bmi<18.5){
  setRes({col:"bg-pink-600",heading:"UnderWeight",msg:" You need to bulk up, eat healthier calories, and work out"}) ;
}
else if(bmi>18.5 && bmi<=24.9)
setRes({col:"bg-green-500",heading:"Perfect",msg:"Bravo ! You are in a perfect Shape . keep it up ."})

else if(bmi>=25 && bmi<=29.9)
setRes({col:"bg-purple-500",heading:"Attention",msg:"Hey, you’re getting Fat. It’s time to hit the gym again."})

else if(bmi>=30 )
setRes({col:"bg-pink-600",heading:"Danger",msg:"You're are Obese ( i.e, Super Unhealthy ) .  If you want to live a long life , get your shit together ASAP ...!!!"})

else 
setRes({col:"bg-yellow-500",heading:"Error",msg:"Something Unexpected occured"})


    },[bmi])






    return (

<div className='flex items-center justify-center w-full mx-auto max-w-xl '>
  <div className={`mx-auto w-full max-w-xl bg-white rounded-xl p-4 border border-black `}>
    
         {/* Logo Div ------ */}
          <div className='mb-2 flex justify-center sm:w-1/3  w-1/2 mx-auto  mx-auto rounded-full px-6  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'>
           
         <Logo url="/report.svg" />
          
          </div>

          <div className=" w-full mx-auto  items-center text-white leading-none  lg:rounded-full flex lg:inline-flex" role="alert">
          <span className=" rounded-full bg-pink-500 px-4 py-2  text-md mx-auto justify-center"> Hey   {gender==="Male"?(" 👽 "):("👸🏻")} , Here's Your Report Card </span>
          </div>
          {/* Here goes Use data */}
    
  
     <div className="w-full max-w-sm   rounded-full shadow-2xl bg-gray-800 mt-2 mx-auto">
     <div className="flex flex-col items-center pb-10">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg bg-white mt-2" src={gender==="Male"?("/batman.svg "):("/woman.svg")}
       alt="Image"/>

      <h5 className="mb-1 text-xl font-medium text-white ">{data.name}</h5>
      <span className="text-sm text-white font-medium">Age :{data.age} Yrs</span>
      <span className="text-sm text-white font-medium">Weight :{data.weight} {unit==="Metric"?("Kg"):("Lbs")}</span>
      <span className="text-sm text-white font-medium">Height :{data.height} {unit==="Metric"?("cm"):("ft")}</span>
      <span className="text-sm text-white font-medium">Activity Level :{data.activityLevel.split(":")[0]} </span>
    
      
    </div>
   </div>
 {/* Div For Analysis the BMi and tips */}
      <ResAlert col={res.col} heading={res.heading} msg={res.msg} />
    
  {/* 3 divs for 3 card inside link */}
   <div className='flex  justify-center w-full p-2 mb-2 '>

   <div className="w-full  mx-auto px-2  rounded-lg ">
        <img 
        className=" mx-auto shadow-lg sm:w-3/4 w-full rounded-t-lg   rounded-full px-4 py-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
         src="/bmi.png" alt="gender image" 
         
         />
            <h5 className=" font-semibold tracking-tight text-red-700 py-5 ">
             Body Mass Index  <br/> <span className='text-blue-500 md:text-xl'>{bmi}  </span> 
            </h5>
   
     </div>


      {/* Image 2*/}          
      <div className="w-full  mx-auto px-2 rounded-lg    ">
        <img 
        className=" mx-auto  shadow-lg sm:w-3/4 w-full rounded-t-lg   rounded-full px-4 py-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
         src="/weight.svg" alt="weight" 
       
         />
            <h5 className="  py-5 font-semibold tracking-tight text-red-700  ">
              Ideal Weight <br/>     <span className='text-blue-500 md:text-xl text-lg'> {iwLow}-{iwHigh} {unit==="Metric"?("Kg"):("Lbs")}</span>
            </h5>

    
     
     </div>


     {/* Image 3 */}
     <div className="w-full  mx-auto  rounded-lg ">
        <img 
        className=" mx-auto shadow-lg sm:w-3/4 w-full rounded-t-lg   rounded-full px-4 py-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 "
         src="/foodintake.svg" alt="gender image" 
         
         />
            <h5 className=" font-semibold tracking-tight text-red-700 py-5 ">
             Maintainance Cal   <br/> <span className='text-blue-500 md:text-xl text-lg'>{bmr} Kcal </span> 
            </h5>
   
     </div>


   </div>

   


   
    <img className='mb-4' src='/bmichart.jpg' alt='bmichart' />
    <div className="bg-grey-200 text-left border-t border-b border-blue-500 text-gray-900 font-medium  py-2 mb-2" role="alert">
  

    <p className="text-sm mt-2"> <span className="font-bold text-red-500">BMI &#10511;</span> Body Mass Index (BMI) is a simple, widely-used measure to evaluate a person’s body weight relative to their height. It provides a numerical value that categorizes individuals into different weight status categories , such as underweight, normal weight, overweight, or obese .<span className='text-teal-500 underline'><Link to="https://www.healthifyme.com/blog/bmi-calculator/">Read More</Link></span> </p>

   <p className="text-sm mt-2 "> <span className="font-bold text-red-500">Ideal Weight &#10511;</span> Ideal Weight according to your height ,calculated assuming the Healthy BMI Range(18.5 -24.9) .<br/> See the image above for BMI Range .
   <span className='text-teal-500 underline'><Link to="https://www.healthifyme.com/blog/bmi-calculator/">Read More</Link></span>
    </p>


   <p className="text-sm mt-2"> <span className="font-bold text-red-500">Maintainance Cal &#10511;</span> The required daily Calories  to maintain your current weight ,based on your weight ,height,age ,gender and Activity Level .<br/> It is also known as TDEE(Total Daily Energy Expenditure)     . <br/>    TDEE=BMR×Activity Factor . 
   <span className='text-teal-500 underline'><Link to="https://www.healthline.com/health/how-to-calculate-your-basal-metabolic-rate#limitations">Read More</Link></span>


</p>
<p className="text-sm mt-2 text-pink-500"> <span className="font-bold text-lg text-teal-500">Disclaimer &#10511; </span>
 While useful, BMR calculators are not 100% accurate.
Although the Mifflin-St. Jeor equation is known as one of the most accurate calculators, its result can be off by around 10%Trusted Source of your true BMR.
</p>

   </div>

      {/* Info Divs */}        
    <div className="flex   bg-pink-500 text-white text-md font-bold px-4 py-2 my-10 rounded-full " >
   <p className='flex text-center mx-auto items-center '> Know everything about BMI , BMR and TDEE </p>
   <Link to={'/about'} >
   
   <p className=' bg-teal-500 px-4 py-1 text-xs rounded-full hover:bg-gray-700'>Click Here.</p>
     </Link>
    </div>

   <div className="flex justify-between mt-10">
   <button className="bg-gray-800 w-24 rounded-full hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r" onClick={()=>navigate('/bmiForm')}>
    Go Back
  </button>
  <button className="bg-gray-800 w-24 rounded-full hover:bg-gray-400 text-white font-bold py-2 px-4 " onClick={()=>navigate('/')}>
    Home
  </button>
  <button className="bg-gray-800 w-24 rounded-full hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-l" onClick={()=>navigate('/about')}>
    Info
  </button>
</div>  
         
     
         
         



</div>
    
</div>








      )
}

export default Result