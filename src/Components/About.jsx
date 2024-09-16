import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  const helpMsg = [
    {
      "heading": " BMI Bible by HealthifyMe  ",
      "description": "Literally evertything there's to know about BMI .They didn’t leave any stone unturned,trust me .",
      "link":"https://www.healthifyme.com/blog/bmi-calculator/"
    },
    
    {
      "heading": "BMR Bible by HealthLine",
      "description": "Literally evertything there's to know about BMR ,activity factor and TDEE .",
      "link":"https://www.healthline.com/health/how-to-calculate-your-basal-metabolic-rate#limitations"
    },
     
     
      {
        "heading": "Daily Calorie Calculator by Forbes ",
        "description": "Some more great details about Daily calory requirements and a BMR and Calorie calculator .",
        "link":"https://www.forbes.com/health/nutrition/calorie-calculator/"
        
      },
      {
        "heading": "All Fitness and Health Calculator by Calulator.net",
        "description": "Every Health and Fitness calulator will great details ,the OG of all Calculator apps .",
        "link":"https://www.calculator.net/fitness-and-health-calculator.html"
        
      },
    
    ]
  return (
    <div  className='flex items-center justify-center w-full my-5 '>
      <div className={`mx-auto w-3/4  bg-white shadow-2xl rounded-xl p-10  `}>
    

         {/* Logo Div ------ */}
        <div className='mb-2 flex flex-col justify-center'>
          <div className=" flex justify-center items-center mx-auto max-w-[300px] -mb-4 ">
             <img src='/research.jpg' />
          </div>
          <div className='flex items-center justify-center -mt-4'>
            <p className='text-gray-900 font-bold'>Rest assured, everything has been well-researched.</p>
            

          </div>
        </div>
            <div className='w-3/4 py-2  flex justify-center  mx-auto  border-b-2 border-gray-900  mb-6'>
                <p className='text-sm font-bold text-green-500'>Here are a few of the main sources where I conducted my research.</p>
            </div>
        <div  className='bg-white  '>
        {
            helpMsg.map((msg)=>
                (<div className="px-4 py-2 bg-gray-900 items-center justify-start leading-none lg:rounded-full flex   mt-3 shadow  rounded-xl lg:h-16 sm:h-24   mt-2 ">

                    <Link to={msg.link} className=" w-1/3 font-bold mr-2  text-green-500 flex-auto p-4 ">{msg.heading}  </Link>
           
                    <span className=" flex justify-start w-2/3 text-white  p-4 ">{msg.description}</span>

                      </div>)
            )
        }

        </div>

        <div className='w-3/4 py-2  flex justify-center  mx-auto  border-t-2 border-gray-900 mt-6'>
                <p className='text-sm font-bold text-red-500'>Click on the Links to know your body a bit better ..!</p>
            </div>





       </div>
    </div>  
  )
}

export default About