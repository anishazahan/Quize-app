
// import data ,{answer} from "../database/data";

//------ redux actions..............
import * as Action from "../Redux/question_reducer"


//--------- fetch question hook to fetch api data and set value to store  

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/Helper";

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
   const [getData,setgetData]=  useState({isloading : false , apiData : [], serverError :null});
   useEffect(()=>{
    setgetData(prev => ({...prev, isloading:true}));

    //----async func fetch backend data--------
      (async ()=>{
        try{

            // let question = await data;

          const [{questions,answers}] =  await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data)=>data);

        //   console.log({questions,answers})

        //   const q = await getServerData('http://localhost:5000/api/questions',(data)=>data)
        //   const [{answers,questions}] = q
        //   console.log({answers,questions})


            if(questions.length> 0){
                setgetData(prev => ({...prev,isloading:false}));
                setgetData(prev => ({...prev,apiData : questions}));

                //----dispatch an action-------
                dispatch(Action.startExamAction( {question : questions,answers}))

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


//------moveAction Dispatch function
export const MoveNextQuestion = ()=>  async (dispatch)=>{
    try {
        dispatch(Action.moveNextAction())
        
    } catch (error) {
        console.log(error)
    }
}
export const MovePrevQuestion = ()=>  async (dispatch)=>{
    try {
        dispatch(Action.movePrevAction())
        
    } catch (error) {
        console.log(error)
    }
}