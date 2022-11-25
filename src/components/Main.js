import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { setUserId } from '../Redux/resultReducer'
import './main.css'

const Main = () => {
    const inputRef = useRef(null)
   const dispatch = useDispatch()
     function startQuz(){
       if( inputRef.current?.value){
          dispatch(setUserId(inputRef.current?.value))
       }
     }


  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points are award for the correct answer.</li>
        <li>Each questions has three options.You can chose only one.</li>
        <li>You can review and Change answer before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      <form id='form'>
        <input className='userid' ref={inputRef} type="text" placeholder='please enter your username*' required />
      </form>
      <div className="start">
        <Link className='btn' to={'quiz'} onClick={startQuz}  >Start Quiz</Link>
      </div>
    </div>
  )
}

export default Main