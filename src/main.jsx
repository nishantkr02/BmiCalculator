import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './App/store.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Gender from './Components/Gender.jsx'
import BmiForm from './Components/BmiForm.jsx'
import Home from './Components/Home.jsx'
import Result from './Components/Result.jsx'
import About from './Components/About.jsx'
import WeightLoss from './Components/WeightLoss.jsx'
const router = createBrowserRouter([
  {
    path:'/' ,
    element:<App />,
    children :[
      {
        path :'/',
        element:<Home />,
      },
     {
      path :'/gender',
      element:<Gender />,
      
     } ,
     {
    
      path :'/about',
      element:<About />,
     
   }

    
    ]
  },
  {
    path :'/bmiForm',
    element:<BmiForm />,
   },
   {
    path :'/bmiForm',
    element:<BmiForm />,
   },
   {
    
      path :'/result',
      element:<Result />,
      
   },
   {
    path:"/fitness-journey",
    element:<WeightLoss />
   }
  
    
  
    ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  
  </React.StrictMode>,
)
