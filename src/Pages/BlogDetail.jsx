import React from 'react'
import firecouple from '../Assets/firecouple.png'
import { FaQuoteRight } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsTwitch, BsInstagram, BsGoogle, BsWhatsapp } from 'react-icons/bs'
function BlogDetail() {
  return (
    <div>
        <div className=' flex flex-col items-center'>
            <div className=' m-3 rounded-md'>
                <img src={firecouple} alt="" className=' rounded-md' />
            </div>
            <div className=' border border-sky-500 p-1 m-3 w-[350px]'>
                <small className=' text-orange-400'>19 September 2023</small>
                <p className=' font-semibold text-sky-700'>I M Abu-Bakr</p>
                <div className=' flex space-x-4 text-sky-500'>
                    <small>Learning</small>
                    <small>News</small>
                    <small> Health</small>
                </div>
            </div>
            <div className=' m-3 text-sky-700'>
                <h2 className=' uppercase leading-8 text-lg font-bold'>Crafted Sole officially opens!</h2>
            </div>
            <div className=' m-3 text-gray-700'>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nulla, nobis corrupti quidem, molestias quaerat veritatis dolorem culpa numquam sit est, quasi animi inventore voluptatem laudantium nisi error vitae! Alias?</small>

            </div>
            <div className=' m-3 text-gray-700'>
                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis aliquid officia, quis deleniti animi culpa alias! Mollitia fuga, inventore doloremque dignissimos molestias doloribus voluptas eum aspernatur optio, ipsa veritatis ipsum.</small>
            </div>
            <div className=' border rounded-xl shadow-2xl border-sky-400 m-3 p-1 text-center'>
                <div className=' m-3 flex justify-center'>
                <FaQuoteRight className=' w-[100px] h-[100px] text-sky-700'/>
                </div>
                <div className=' m-3 text-sky-500 text-lg'>
                    <small>Lorem is a dummy text used in the pritning and typesetting industry</small>
                    </div>
            </div>
            <div className=' m-3 mt-10 text-gray-700'>
                <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, optio, ullam provident, necessitatibus assumenda consequuntur quia totam eveniet modi illo dolore corporis accusantium eaque? Perspiciatis cum placeat ab nihil suscipit?</small>
            </div>
            <div className=' border rounded-lg p-3 shadow-xl shadow-sky-500 m-3 text-center justify-center space-x-4 flex'>
                <BsFacebook className=' hover:text-sky-700 w-[30px] h-[30px]'/>
                <BsTwitter className=' hover:text-sky-700 w-[30px] h-[30px]' />
                <BsInstagram className=' hover:text-sky-700 w-[30px] h-[30px]' />
                <BsTwitch className=' hover:text-sky-700 w-[30px] h-[30px]' />
                <BsWhatsapp  className=' hover:text-sky-700 w-[30px] h-[30px]' />
                <BsGoogle className=' hover:text-sky-700 w-[30px] h-[30px]'/>
            </div>
            <div className='  m-3 mt-10 p-1'>
            <div className='  m-2 text-center'>
                <h1 className=' italic text-gray-700'> 10 Crafty thoughts on <span className=' not-italic text-sky-700 font-semibold uppercase'> Crafted Sole Officialy opens!</span></h1>
            </div>
            <div className=' flex gap-2 m-2'>
                <div className=' w-[200px] h-[100px]'>
                    <img src={firecouple} alt="" className=' w-full h-full' />
                </div>
                <div className=' flex flex-col space-y-2'>
                    <h4 className=' text-sky-700'>I M Abu-Bakr</h4>
                    <p className=' text-sky-500'> 19 September 2023 10:52pm</p>
                    <small className=' text-gray-700'>Lorem ipsum is simply a dummy text of the printing and tpesetting industry. lorem 
                        ipsum dolor sit amet has been teh industry's dummy text ever since the 1500s, when an unknown printer took a gallery of type and scramble 
                        it to make a type specimen book
                    </small>
                    <small className=' text-sky-100 bg-sky-500 w-fit p-1 rounded-md shadow-lg'>Reply</small>
                </div>
            </div>
            <div className=' flex gap-2 m-2'>
                <div className=' w-[200px] h-[100px]'>
                    <img src={firecouple} alt="" className=' w-full h-full' />
                </div>
                <div className=' flex flex-col space-y-2'>
                    <h4 className=' text-sky-700'>I M Abu-Bakr</h4>
                    <p className=' text-sky-500'> 19 September 2023 10:52pm</p>
                    <small className=' text-gray-700'>Lorem ipsum is simply a dummy text of the printing and tpesetting industry. lorem 
                        ipsum dolor sit amet has been teh industry's dummy text ever since the 1500s, when an unknown printer took a gallery of type and scramble 
                        it to make a type specimen book
                    </small>
                    <small className=' text-sky-100 bg-sky-500 w-fit p-1 rounded-md shadow-lg'>Reply</small>
                </div>
            </div>
            </div>

            <div className=' flex gap-2 items-center m-3 rounded-xl p-1'>
                <h1 className=' text-xl text-sky-500'>NB:</h1>
                <small className=' text-red-500'>You can only reply to this conversation only if you have an account with us!</small>
            </div>
            <div className=' mb-5 m-3'>
                <button className=' bg-sky-500 text-sky-50 hover:bg-sky-600 p-1 rounded-md shadow-xl'>Craft an account</button>
            </div>
        </div>
    </div>
  )
}

export default BlogDetail