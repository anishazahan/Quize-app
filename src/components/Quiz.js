import React, { useEffect, useState } from 'react'
import './main.css'
import Questions from './Questions'
import {useSelector,useDispatch} from 'react-redux'
import { MoveNextQuestion,MovePrevQuestion } from '../hooks/fetchQuestion'
import { PushAnswer } from '../hooks/setResult'


const Quiz = () => {

  const [check,setChecked] = useState([]);

 const state = useSelector(state => state )
 const { queue,trace} = useSelector(state => state.questions )
 const dispatch = useDispatch();

  useEffect (()=>{
    console.log(state);
  },[])

  // ............next and prev button event handler .....

  function onNext (){
    console.log("next")
    //----update the trace value by one using MoveNextAction--------
    // if(trace < queue.length){
    //   dispatch(MoveNextQuestion());
    //   // dispatch(PushAnswer(check));
    // }
    
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

  return (
    <div className='container'>
          <h1 className='title text-light'>Quiz Application</h1>

          <Questions onChecked={onChecked}></Questions>
          {/* ----------------display question------------------ */}
          <div className="grid">
            <button onClick={onPrev} className='btn prev'>Prev</button>
            <button onClick={onNext} className='btn next'>Next</button>
          </div>

    </div>
  )
}

export default Quiz