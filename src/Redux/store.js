import { combineReducers, configureStore } from "@reduxjs/toolkit";

// .............import reducer................

import  questionReducer  from "./question_reducer";
import  resultReducer  from "./resultReducer";

const rootReducer = combineReducers(
    {
        questions : questionReducer,
        result : resultReducer
    }
)

// .............create store with reducer................
export default  configureStore({reducer : rootReducer});
