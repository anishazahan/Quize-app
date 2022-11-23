import React, { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetResultAction } from '../Redux/resultReducer'
import { resetAllAction } from '../Redux/question_reducer'

//------import action----


const Result = () => {
 
   const dispatch =  useDispatch();
  const {questions : {queue ,answer}, result : {result , userId}} = useSelector(state => state)

  useEffect(()=>{
    console.log(result);
  },[])


   const totalPoints = queue .length * 10;
  //  const attempts = 

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
      <span className='bold'>50</span>
    </div>
    <div className="flex border">
      <span>Total Questions :</span>
      <span className='bold'>05</span>
    </div>
    <div className="flex border">
      <span>Total Attempts :</span>
      <span className='bold'>03</span>
    </div>
    <div className="flex border">
      <span>Total Earn points :</span>
      <span className='bold'>30</span>
    </div>
    <div className="flex">
      <span>Quiz Result :</span>
      <span className='bold'>Passed</span>
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