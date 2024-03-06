import {configureStore} from '@reduxjs/toolkit'
import bmiSlice  from './bmiSlice'

 const store = configureStore({
    reducer :{
        bmi:bmiSlice }
})

export default store ;