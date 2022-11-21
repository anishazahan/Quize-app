import React from 'react'
import './main.css'

const Result = () => {
  return (
    <div className='container'>
       <h1 className='title text-light'>Quiz Result</h1>
    <div className="result flex-center">
    <div className="flex">
      <span>Username</span>
      <span className='bold'>Daily tution</span>
    </div>
    <div className="flex">
      <span>Total Quiz Point :</span>
      <span className='bold'>50</span>
    </div>
    <div className="flex">
      <span>Total Questions :</span>
      <span className='bold'>05</span>
    </div>
    <div className="flex">
      <span>Total Attempts :</span>
      <span className='bold'>03</span>
    </div>
    <div className="flex">
      <span>Total Earn points :</span>
      <span className='bold'>30</span>
    </div>
    <div className="flex">
      <span>Quiz Result :</span>
      <span className='bold'>Passed</span>
    </div>
    </div>
    </div>
  )
}

export default Result