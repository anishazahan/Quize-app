
import data  from "../database/data";

//------ redux actions..............
import * as Action from "../Redux/question_reducer"


//--------- fetch question hook to fetch api data and set value to store  

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
   const [getData,setgetData]=  useState({isloading : false , apiData : [], serverError :null});
   useEffect(()=>{
    setgetData(prev => ({...prev,isloading:true}));

    //----async func fetch backend data--------
      (async ()=>{
        try{

            let question = await data;
            if(question.length> 0){
                setgetData(prev => ({...prev,isloading:false}));
                setgetData(prev => ({...prev,apiData : question}));

                //----dispatch an action-------
                dispatch(Action.startExamAction(question))

            }else{
                throw new Error ("No question available")
            }
        }catch(error){
            setgetData(prev => ({...prev,isloading:false}));
            setgetData(prev => ({...prev,serverError : error}));

        }

      })();

   },[dispatch]);
   return [getData,setgetData];
}