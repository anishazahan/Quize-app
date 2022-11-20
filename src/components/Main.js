import React from 'react'

const Main = () => {
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
    </div>
  )
}

export default Main