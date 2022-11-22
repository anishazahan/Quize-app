import React from 'react'

const ResultTable = () => {
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
                <tr className='table-body' >
                <td >Daily Tution</td>
                <td>3</td>
                <td>20</td>
                <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable