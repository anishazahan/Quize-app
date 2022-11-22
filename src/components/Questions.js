import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import data from '../database/data'

//........custom hook.........
import { useFetchQuestion } from '../hooks/fetchQuestion'



const Questions = () => {

    const [checked,setChecked] = useState(undefined)
   const [{isloading, apiData, serverError},setgetData]= useFetchQuestion()

    const question = data[0];
   
    const questions = useSelector(state => state.questions.queue )
  
    useEffect(()=>{

        console.log(questions[0])
        // console.log(apiData)
        // console.log(serverError)
    },[])


    function onselect(){
        setChecked(true)
        // console.log("radio btn change");
    }

if(isloading)return <h3 className='loading'>Loading</h3>
if(serverError)return <h3 className='loading'>{serverError ||"unknown error"}</h3>



  return (
    <div className='questions'>
        <h2 className='questions__heading'>{question.question}</h2>
        <ul key={question.id} className='q-list'>
            {
                question.options.map((q,i) => {
                   return <li key={i}>
                        <input 
                        type="radio"
                        value={false}
                        name="options"
                        id={`q${i}.options`}
                        onChange={onselect}
                        
                        />
                        <label className='q-option' htmlFor={`q${i}.options`}>{q}</label>
                        <div className="check checked"></div>
                  </li>
                })
            }
            
        </ul>

    </div>
  )
}

export default Questions