import { createSlice } from "@reduxjs/toolkit";

const initialState ={
   gender :"" ,
   userData :{} ,
   unit :""
}
 export const bmiSlice = createSlice({
    name :'bmi',
    initialState ,
    reducers :{
       
        switchToMale :(state)=>{
      
            state.gender="Male" ;
            //alert(" Male button clicked")
           
        } ,
        switchToFemale :(state)=>{
      
            state.gender="Female" ;
            //alert(" FeMale button clicked")
         
        } ,
        switchUnit :(state,action)=>{
            state.unit=action.payload

        } ,
        addData :(state,action)=> {
            
            state.userData ={...action.payload};
        }

    }

 })
 export const {switchToMale,switchToFemale,switchUnit,addData} = bmiSlice.actions ;
 export default bmiSlice.reducer ;