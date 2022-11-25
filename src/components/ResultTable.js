import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/Helper'

const ResultTable = () => {

        const [data,setData] = useState([]);
    useEffect(()=>{
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,(res)=>{
            setData(res)
        })
    })


  return (
    <div className='result-Table'>
        <table>
            <thead className='table-head'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div> No data found</div> }
                {
                    data.map((v,i)=>{
                     return  <tr key={i} className='table-body' >
                        <td >{v?.username ||'' }</td>
                        <td>{v?.attempts || 0}</td>
                        <td>{v?.points || 0}</td>
                        <td>{v?.achived || ""}</td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable