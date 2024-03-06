import React from 'react'

function About() {
  return (
    <div className='flex items-center justify-center w-full shadow-xl '>
  <div className={`mx-auto w-full max-w-lg bg-gray-100 shadow-2xl rounded-xl p-10 border border-black `}>
    {/* Info Divs */}        
    <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-2 mb-2" role="alert">
    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
   <p> Here are some things  you should know about the BMI .</p>
    </div>
{/* Research */}
<div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-2" role="alert">
  <div className="flex">
    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p className="font-bold">BMI Chart Research </p>
      <p className="text-sm">
      A large body of research suggests that people with higher BMIs are more prone to health-related complications.5
      <br/>

     A review article published in the Lancet, which is a highly respected medical journal, showed a significant increase in cancer with a 5 kg/m2 increase in BMI.6  
     <br/>
    Being overweight or obese at age 40 is associated with a significantly increased risk of dying prematurely.7 BMI predicts diabetes, as well as a specialized blood sugar test.8 BMIs over 25 are linked to heart disease and high blood pressure.9
    <br/>
    Some studies show that being underweight is also a risk for premature death, sometimes even more so than being overweight. These studies, however, did not exclude “sick” people, like those with cancer or emphysema, or people who smoke or use dangerous drugs, which often can cause weight loss.
      </p>
    </div>
  </div>
</div>
  </div>
  </div>
  )
}

export default About