import React from 'react'
import firecouple from '../Assets/firecouple.png'
import jewellery from '../Assets/jewellery.png'
import brownhijabi from '../Assets/brownhijabi.png'
import corange from '../Assets/coupleorange.png'
import womancap from '../Assets/womancap.png'
import african3 from '../Assets/african-3.png'
import african6 from '../Assets/african-6.png'
import {AiFillDelete, AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Wishlist() {
    const WishView = [
        {
            img: firecouple,
            title: "Couple African wear, epic, customized for elite look",
            sub: 'African Couples',
            price: "KES 5400",
        },
        {
            img: corange,
            title: "Couple African wear, epic, customized for elite look",
            sub: 'African wear',
            price: "KES 2200",
        },
        {
            img: jewellery,
            title: "Gold plated jewellery, fine and glaze, necklace and wrist accesories",
            sub: 'Jewellery',
            price: "KES 7968",
        },
        {
            img: brownhijabi,
            title: "Crafted hands on Hijab gift, standardized & African",
            sub: 'Islam Custom',
            price: "KES 4832",
        },
        {
            img: womancap,
            title: "Standard crafted beige women cap",
            sub: 'Head gears',
            price: "KES 750",
        },
        {
            img: african6,
            title: "Bright blue dress fashion,fit, sleeveless",
            sub: 'Women',
            price: "KES 2500",
        },
        {
            img: african3,
            title: "Kenya flag colors on earrings, african with blah blah blah",
            sub: 'Women',
            price: "KES 300",
        }
    ]
  return (
    <div>

        <div>
            <div className=' m-10 text-center'>
                <h1 className=' text-3xl font-montserrat uppercase underline'>Wishlist</h1>
            </div>

            
                {WishView.map((WishView, index) => {
                    return(
                        <div className=' flex flex-col gap-3 justify-between mt-3 p-2 border shadow-xl rounded-xl m-10
                        md:flex lg:flex md:flex-row xl:flex'>
                        <div className=' flex flex-col items-center md:flex md:flex-row lg:flex xl:flex gap-3'>
                            <div className=' rounded-xl shadow-xl'>
                                <img src={WishView.img} alt="" className=' rounded-xl w-[120px] h-[120px]' />
                            </div>
                            <div className=' flex flex-col text-center
                            md:text-start'>
                                <h1 className=' font-montserrat font-medium'>{WishView.title}</h1>
                                <small className=' font-montserrat text-sky-500'>{WishView.sub}</small>
                                <small className=' font-montserrat text-lg text-indigo-600'>{WishView.price}</small>
                            </div>
                        </div>
                        <div className=' flex gap-2 items-center justify-center '>
                            <button className=' bg-sky-500 hover:bg-sky-600 p-2 rounded-lg text-slate-200 h-[40px] text-center items-center shadow-lg'>Add <span className='hidden md:inline'>to Cart </span></button>
                            <button className='  bg-sky-500 hover:bg-sky-600 p-2 rounded-lg text-slate-200 h-[40px] text-center items-center shadow-lg'>View</button>
                            <button className=' bg-sky-100 p-2 rounded-lg text-black h-[40px] text-center items-center shadow-lg
                            hover:text-red-500'><AiFillDelete/></button>
                        </div>
                    </div>
                    )
                })}
               <div className=' flex justify-between m-10 shadow-lg rounded-md p-2 bg-slate-300'>
               <Link to='/'> <div className=' flex items-center hover:text-sky-500 font-montserrat cursor-pointerhover:transition-all hover:transform hover:translate-x-1  '>
                    <AiOutlineArrowLeft/>
                    Continue SHopping Craft
                </div> </Link>
                <div className=' font-montserrat flex items-center hover:text-red-500 hover:transition-all hover:transform hover:translate-x-1 cursor-pointer'>
                    <AiFillDelete/>
                    Clear Wishlist
                </div>
               </div>
        </div>

    </div>
  )
}

export default Wishlist