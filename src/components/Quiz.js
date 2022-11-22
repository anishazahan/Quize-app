import React, { useEffect } from 'react'
import './main.css'
import Questions from './Questions'
import {useSelector,useDispatch} from 'react-redux'
import { MoveNextQuestion } from '../hooks/fetchQuestion'
const Quiz = () => {

 const state = useSelector(state => state.Questions.trace )

 const dispatch = useDispatch();
  useEffect (()=>{
    // console.log(state);
  },[])

  // ............next and prev button event handler .....
  function onNext (){
    console.log("next")
    //----update the trace value by one using MoveNextAction--------
    dispatch(MoveNextQuestion);
  }
  function onPrev (){
    console.log("prev")
  }

  return (
    <div className='container'>
          <h1 className='title text-light'>Quiz Application</h1>

          <Questions></Questions>
          {/* ----------------display question------------------ */}
          <div className="grid">
            <button onClick={onPrev} className='btn prev'>Prev</button>
            <button onClick={onNext} className='btn next'>Next</button>
          </div>

    </div>
  )
}

export default Quiz