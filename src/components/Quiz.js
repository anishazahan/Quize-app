import React, { useEffect, useState } from 'react'
import './main.css'
import Questions from './Questions'
import {useSelector,useDispatch} from 'react-redux'
import { MoveNextQuestion,MovePrevQuestion } from '../hooks/fetchQuestion'
import { PushAnswer } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Quiz = () => {

  const [check,setChecked] = useState(undefined);

 const result = useSelector(state => state.result.result )
 const { queue,trace} = useSelector(state => state.questions )
 const dispatch = useDispatch();

  useEffect (()=>{
    // console.log(state);
  },[])

  // ............next and prev button event handler .....

  function onNext (){
    console.log("next")
    //----update the trace value by one using MoveNextAction--------
    if(trace < queue.length){
      dispatch(MoveNextQuestion());

     //---inset new result in the array- 
     if(result.length <= trace ){
      dispatch(PushAnswer(check));
     }
    }
    //--------reset the value of the checked variable--
    
  }
  function onPrev (){
    console.log("prev")
    if(trace > 0){
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check){
      console.log(check);
      setChecked(check)
  }

  //---finish exam the last question---------
   if(result.length && result.length >= queue.length){
      return <Navigate to={'/result'} replace='true'></Navigate>
      
   }


  return (
    <div className='container'>
          <h1 className='title text-light'>Quiz Application</h1>

          <Questions onChecked={onChecked}></Questions>
          {/* ----------------display question------------------ */}
          <div className="grid">
           {
            trace > 0 ?  <button onClick={onPrev} className='btn prev'>Prev</button> : <div></div>
           }
            <button onClick={onNext} className='btn next'>Next</button>
          </div>

    </div>
  )
}

export default Quiz