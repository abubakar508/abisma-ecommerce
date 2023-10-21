import React from 'react'
import AccDisplay from './AccDisplay'

function Returns() {
  return (
    <div>
         <div className=' flex flex-col sm:flex-row'>
            <div>
                <AccDisplay />
            </div>
            <div className=' mt-14'>
             <div className=' border p-3 m-4 rounded-md shadow-xl'>
                <h1 className=' uppercase font-bold text-lg'>Return Options</h1>
                <small>No Return options available</small>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Returns