import React, { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetResultAction } from '../Redux/resultReducer'
import { resetAllAction } from '../Redux/question_reducer'
import { attemps_number, earn_points,flagResult  } from '../helper/Helper'

//------import action----


const Result = () => {
 
   const dispatch =  useDispatch();
  const {questions : {queue ,answer}, result : {result , userId}} = useSelector(state => state)

  useEffect(()=>{
    console.log(flag);
  },[])


   const totalPoints = queue .length * 10;
   const attempts =  attemps_number(result);
   const earnPoints = earn_points (result,answer,10);
   const flag = flagResult (totalPoints,earnPoints)

  function onRestart (){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }
  return (
    <div className='container'>
       <h1 className='title text-light'>Quiz Result</h1>
    <div className="result flex-center">
    <div className="flex border">
      <span>Username</span>
      <span className='bold'>Daily tution</span>
    </div>
    <div className="flex border">
      <span>Total Quiz Point :</span>
      <span className='bold'>{totalPoints || 0 }</span>
    </div>
    <div className="flex border">
      <span>Total Questions :</span>
      <span className='bold'>{queue.length || 0 }</span>
    </div>
    <div className="flex border">
      <span>Total Attempts :</span>
      <span className='bold'>{attempts || 0}</span>
    </div>
    <div className="flex border">
      <span>Total Earn points :</span>
      <span className='bold'>{earnPoints || 0 }</span>
    </div>
    <div className="flex">
      <span>Quiz Result :</span>
      <h4 style={{color : `${flag ? "yellow" : "red" }`}} className='bold'>{ flag ? "Passed" : "Failed"}</h4>
    </div>
    </div>

    <div className="start">
      <Link className='restart-btn' to={"/"} onClick={ onRestart} >Restart </Link>
    </div>

    {/* .....................result Table.............. */}

    <ResultTable></ResultTable>
    </div>
  )
}

export default Result