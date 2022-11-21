import React, { useEffect, useState } from 'react'
import data from '../database/data'

const Questions = () => {

    const [checked,setChecked] = useState(undefined)
    const question = data[0];
    console.log(question);
    useEffect(()=>{

        // console.log(data)
    },[])
    function onselect(){
        setChecked(true)
        // console.log("radio btn change");
    }
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