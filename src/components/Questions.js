import React, { useState } from 'react'

const Questions = () => {

    const [checked,setChecked] = useState(undefined)
    function onselect(){
        setChecked(true)
        console.log("radio btn change");
    }
  return (
    <div className='questions'>
        <h2 className='questions__heading'>Simple question 1</h2>
        <ul>
            <li>
                <input 
                type="radio"
                value={checked}
                name="options"
                id='q1-option'
                onChange={onselect}
                
                />
            </li>
        </ul>

    </div>
  )
}

export default Questions