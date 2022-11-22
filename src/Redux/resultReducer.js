
import { createSlice } from "@reduxjs/toolkit"

export  const resultReducer = createSlice({
    name : "result",
    initialState :{
        userId :null ,
        result : []
    },
    reducers : {
        setUserId : (state,action) =>{
            state .userId = action.payload
        },
        pushUserAction :(state,action)=>{
            state.result.push(action.payload);
        },
        updateResultAction :(state,action)=>{
            const { trace,checked} = action.payload;
            state.result.fill()
        },
        resetResultAction : ()=>{
            return{
                userId :null ,
                result : []
            }
        }
    }
})

export const  {setUserId,pushUserAction,resetResultAction } = resultReducer.actions;
export default resultReducer.reducer;
