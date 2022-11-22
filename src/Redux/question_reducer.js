import { createSlice } from "@reduxjs/toolkit"

// -----------create reducer with initial value---------------

export  const questionReducer = createSlice({
    name : "questions",
    initialState : {
        queue :[],
        answer :[],
        trace :0
    },
    reducers :{
        startExamAction :(state , action)=>{
     return{
            ...state,
            queue : action.payload
        }
        },
        moveNextAction : (state)=>{
            return {
                ...state,
                trace : state.trace + 1,

            }
        }
    }
})

export const {startExamAction,moveNextAction} = questionReducer.actions;
export default questionReducer.reducer