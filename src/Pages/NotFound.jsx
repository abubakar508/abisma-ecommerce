import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <div className=' flex-col flex text-center m-3 shadow-2xl rounded-lg p-2'>
            <h1 className=' text-8xl font-bold text-red-500'>404</h1>
            <small className=' text-6xl font-medium uppercase'>Not Found</small>
            <small className=' mt-3'>The Page you are looking for is not found/available</small>
        </div>
        <div className=' text-center my-5'>
            <small className=' font-medium text-sky-500'>Gifts will be available soon.</small>
            <p className=' text-sky-700 mb-3'>Click the button below to cotinue shopping in Crafted Sole.</p>

            <Link to='/' className=' text-sky-100 hover:text-red-500 text-lg p-2 bg-sky-500 rounded-xl'>Continue Shopping</Link>
        </div>
    </div>
  )
}

export default NotFound