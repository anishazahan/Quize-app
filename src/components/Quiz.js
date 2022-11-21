import React from 'react'
import './main.css'
import Questions from './Questions'

const Quiz = () => {
  function onNext (){
    console.log("next")
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