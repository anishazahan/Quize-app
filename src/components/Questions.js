import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


//........custom hook.........
import { useFetchQuestion } from '../hooks/fetchQuestion'
import { updateResult } from '../hooks/setResult'
// import { updateResultAction } from '../Redux/resultReducer'



const Questions = ({onChecked}) => {

    const [checked,setChecked] = useState(undefined)
    
   const [{isloading, apiData, serverError},setgetData]= useFetchQuestion()
    // useSelector(state=>console.log(state))
   
   
    const questions = useSelector(state => state.questions.queue[state.questions.trace] )
    const {trace} = useSelector(state =>state.questions )
    const result = useSelector(state =>state.result.result )
  
    const dispatch = useDispatch()

    useEffect(()=>{
     dispatch(updateResult({trace,checked}))
    },[checked])


    function onselect(i){
        // setChecked(true)
        // console.log(i);
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace,checked}))
    }

if(isloading)return <h3 className='loading'>Loading</h3>
if(serverError)return <h3 className='loading'>{serverError ||"unknown error"}</h3>



  return (
    <div className='questions'>
        <h2 className='questions__heading'>{questions?.question}</h2>
        <ul key={questions?.id} className='q-list'>
            {
                questions?.options.map((q,i) => {
                   return <li key={i}>
                        <input 
                        type="radio"
                        value={false}
                        name="options"
                        id={`q${i}.options`}
                        onChange={()=>onselect(i)}
                        
                        />
                        <label className='q-option' htmlFor={`q${i}.options`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                  </li>
                })
            }
            
        </ul>

    </div>
  )
}

export default Questions