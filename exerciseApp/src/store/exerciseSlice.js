import { createSlice } from "@reduxjs/toolkit"



const initialState={
    online:false,
    bodyPart:"",
    search:""
}


const exerciseSlice=createSlice({
    name:'exerciseSlice',
    initialState,
    reducers:{
        changeNetworkStatus:(state,action)=>{
            state.online=action.payload;
        },
        selectBodyPart:(state,action)=>{
            state.bodyPart=action.payload
        },
        selectSearch:(state,action)=>{
            state.search=action.payload
        }
    }
})

export default exerciseSlice.reducer;

export const {changeNetworkStatus,selectBodyPart,selectSearch}=exerciseSlice.actions;