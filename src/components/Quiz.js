import React from 'react'
import './main.css'

const Quiz = () => {
  return (
    <div className='container'>
          <h1 className='title text-light'>Quiz Application</h1>

          {/* ----------------display question------------------ */}
          <div className="grid">
            <button className='btn prev'>Prev</button>
            <button className='btn next'>Next</button>
          </div>

    </div>
  )
}

export default Quiz