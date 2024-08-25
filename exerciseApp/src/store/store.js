import { configureStore } from "@reduxjs/toolkit";
import ExerciseSliceReducer from './exerciseSlice'
export const store=configureStore({
    reducer:ExerciseSliceReducer
})