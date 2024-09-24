import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
function About() {
  const helpMsg = [
    {
      "heading": " BMI Bible by HealthifyMe  ",
      "description": "Literally everything there is to know about BMI. They didn’t leave any stone unturned—trust me.",
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
    const navigate = useNavigate();
  return (
    <div  className='flex items-center justify-center w-screen sm:w-full  mx-auto '>
      <div className={`mx-auto w-screen  sm:w-3/4   bg-white shadow-2xl rounded-xl  sm:px-4  `}>
    

         {/* Logo Div ------ */}
        <div className='mb-2 flex flex-col justify-center'>
          <div className=" flex justify-center items-center mx-auto max-w-[200px] -mb-4 ">
             <img src='/research.jpg' />
          </div>
          <div className='flex items-center justify-center -mt-4'>
            <p className='text-gray-900 font-bold'>Rest assured, everything has been well-researched.</p>
            

          </div>
        </div>
            <div className='w-3/4 py-2  flex justify-center  mx-auto  border-b-2 border-gray-900  mb-6'>
                <p className='text-sm font-bold text-green-500'>Below are some of the links used in my research; these will help you understand your body better.</p>
            </div>
        <div  className='bg-white w-screen sm:w-full text-sm sm:text-md mx-auto'>
        {
            helpMsg.map((msg)=>
                (<div className="px-4 py-2 bg-gray-900 items-center justify-start leading-none lg:rounded-full flex   mt-3 shadow  rounded-2xl lg:h-20 sm:h-28  h-32  ">

                    <Link to={msg.link} className=" w-1/3 font-bold mr-2  text-green-500 flex-auto p-4 ">{msg.heading}  </Link>
           
                    <span className=" flex justify-start w-2/3 text-white  p-4 ">{msg.description}</span>

                      </div>)
            )
        }

        </div>

        <div className='w-3/4 py-2  flex justify-center  mx-auto  border-t-2 border-gray-900 mt-6'>
                <Link to='/fitness-journey' className='text-sm font-bold text-red-500'>I'll be sharing weight loss tips in the future, so stay tuned!</Link>
            </div>
            <div className='flex justify-between py-4 mt-4 p-2'>
            <button className="bg-green-500 w-48 rounded-full hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r "onClick={()=>navigate('/')}>
              Back to Home
             </button>
             <button className="bg-green-500 w-48 rounded-full hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-l "onClick={()=>navigate('/fitness-journey')}>
              Fitness Tips
             </button>
            </div>
            





       </div>
    </div>  
  )
}

export default About