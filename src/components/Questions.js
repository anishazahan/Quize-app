import React, { useEffect, useState } from 'react'
import data from '../database/data'

const Questions = () => {

    const [checked,setChecked] = useState(undefined)
    const question = data[0];
    useEffect(()=>{

        // console.log(data)
    },[])
    function onselect(){
        setChecked(true)
        // console.log("radio btn change");
    }
  return (
    <div className='questions'>
        <h2 className='questions__heading'>Simple question 1</h2>
        <ul key={question.id} className='q-list'>
            <li>
                <input 
                type="radio"
                value={false}
                name="options"
                id='q1-option'
                onChange={onselect}
                
                />
                <label className='q-option' htmlFor="q1-option">Option</label>
                <div className="check checked"></div>
            </li>
        </ul>

    </div>
  )
}

export default Questions