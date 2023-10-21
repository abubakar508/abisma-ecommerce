import React from 'react'
import {AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function ForgotPass() {
  return (
    <div>
        <div className=' flex m-2 flex-col items-center justify-center mt-10 mb-10'>
        <div className=' m-2'>
            <h1 className=' uppercase text-lg font-bold text-sky-500 font-montserrat text-center mb-3'>Forgot Password?</h1>
            <p className=' italic text-center mb-5'>Enter your email or username below and we will send you a link to reset your password.</p>
        </div>
        <div className=' w-[300px] mb-4'>
              <label
                htmlFor="email"
                className="block mb-4 text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Enter your email'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-sky-500 shadow-sm ring-2 ring-inset ring-sky-500 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className=' mt-3'>
                <button
                type='Submit'
                required
                id='Forgot-submit'
                 className=' border p-3 bg-sky-500 text-white rounded hover:bg-sky-400'>Submit</button>
            </div>
           <Link to='/Login'><div className=' flex flex-row items-center text-sky-500 hover:text-sky-400 mt-4'>
            <AiOutlineArrowLeft/>
                <small className=' text-sky-500 font-bold'>Back to Login</small>
            </div></Link>
    </div>
    </div>
  )
}

export default ForgotPass