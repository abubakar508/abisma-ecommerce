import React from 'react'
import AccDisplay from './AccDisplay'

function PaymentOptions() {
  return (
    <div>
        <div className=' flex flex-col sm:flex-row'>
            <div>
                <AccDisplay />
            </div>
            <div className=' mt-14'>
             <div className=' border p-3 m-4 rounded-md shadow-xl'>
                <h1 className=' uppercase font-bold text-lg'>Payment Options</h1>
                <small>No payment options available</small>
             </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentOptions