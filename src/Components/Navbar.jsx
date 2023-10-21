import React, { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import { HiUser} from 'react-icons/hi2'
import {GiShoppingCart} from 'react-icons/gi'
import {BiSearchAlt2} from 'react-icons/bi'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineCloseCircle, AiFillDelete, AiOutlineArrowDown} from 'react-icons/ai'
import firecouple from '../Assets/firecouple.png'
import jewellery from '../Assets/jewellery.png'
import brownhijabi from '../Assets/brownhijabi.png'
import corange from '../Assets/coupleorange.png'
import womancap from '../Assets/womancap.png'
import craftedsoleremv from '../Assets/craftedsoleremv.png'
import denimgirl from '../Assets/denimgirl.png'
import african3 from '../Assets/african-3.png'
import african6 from '../Assets/african-6.png'
import { Link } from 'react-router-dom'
function Navbar() {
    const [click, setClick] = useState(false);
    const clicked = () => {
        setClick(true);
    }
    const notClicked = () => {
        setClick(false)
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    ;
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const CartView = [
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
        <div className='flex-col flex fixed z-50 bottom-0 right-0 mr-2 mb-2 items-center '>
            <div className=' h-10 w-1 bg-gradient-to-t from-indigo-600/70'/>
            <div className=' border-2 border-t-0 border-b-red-500 border-l-red-500 border-r-red-500 rounded-full w-5 h-5 bg-gradient-to-tr from-sky-500/90 via-indigo-600/50
             '/>
        </div>
        <div className=' bg-sky-500 py-4 w-full md:w-full '>
            <nav className='flex flex-col items-center
             md:flex-row md:items-center justify-around
             w-full'>
                <Link to='/'><div className=''>
                <img src={craftedsoleremv} alt="" className=' w-[80px]' />
                </div></Link>
                <div className=' flex relative'>
                    <BiSearchAlt2 className='absolute right-0 w-[25px] h-[25px] mt-3 mr-1 text-sky-70
                     '/>
                    <input type="text" placeholder='Craft item...' 
                    className=' rounded-full p-1 placeholder:text-sky-700 bg-sky-100
                    mt-2 md:w-64 font-montserrat'/>
                </div>

                <div className='flex w-72 justify-around  py-2 fixed shadow-xl bottom-2 bg-sky-500 rounded
                 md:relative md:bg-transparent md:w-32 z-30'>
                    <Link to='/Wishlist'><AiOutlineHeart className=' w-5 h-5 text-sky-100 hover:text-black
                     hover:transform hover:transition-all hover:scale-100'/></Link>
                   <Link to='/Login'><HiUser className=' w-5 h-5 text-sky-100 hover:text-black
                     hover:transform hover:transition-all hover:scale-100'/></Link>
                    <GiShoppingCart className=' w-5 h-5 text-sky-100 hover:text-black
                     hover:transform hover:transition-all hover:scale-100' onClick={handleOpen}/>
                </div>
                {open &&(
                <div className=' fixed w-[350px] bottom-[50px] bg-sky-500 z-50 rounded-xl p-3
             lg:top-[2rem] lg:right-0 h-[500px] overflow-scroll overflow-x-hidden'>
                    <div className=' flex items-end justify-between'>
                        <h1 className=' font-montserrat text-black font-bold'>Cart Overview |</h1>
                        <button className=' bg-sky-100 p-1 text-xs rounded-lg text-black font-montserrat hover:bg-sky-300 hover:text-white'>Check Out</button>
                        <button className=' flex text-xs hover:text-white'>View Cart <AiOutlineArrowDown/></button>
                        <AiOutlineCloseCircle className=' w-[40px] h-[30px] text-red-600' onClick={handleClose}/></div>
                {CartView.map((CartView, index) => {
                    return (
<div>
                    <div className='w-[320px] mt-2 relative'>
                        <div className=' flex gap-2 border-[2px] p-1 rounded-xl items-center'>
                            <div className=' w-[100px] rounded-md'>
                            <img src={CartView.img} alt="" className=' w-[100px] h-[100px] rounded-xl' />
                            </div>
                            <div className=' font-montserrat flex flex-col'>
                                <h5 className=' text-sm text-sky-100'>{CartView.title}</h5>
                                <small className=' text-black'>{CartView.sub}</small>
                                <small className=' font-bold text-sky-100'>{CartView.price}</small>
                            </div>
                            <button className=' absolute flex right-5 bottom-5 bg-sky-100 p-2 rounded font-montserrat text-sm hover:text-red-500'><AiFillDelete/></button>
                        </div>
                    </div>
                </div>
                    )
                })}
                </div>
                )}
                
            </nav>
            <div className=' w-fit absolute top-12 p-2 md:hidden'>
                <RxHamburgerMenu className=' text-sky-100 w-5 h-5 md:hidden hover:text-black cursor-pointer
                 hover:transform hover:transition-all hover:scale-100'
                onClick={toggleMenu}/>
            </div>
        </div>
    <div className={`fixed top-0 border w-screen h-screen bg-gray-300 opacity-90 z-10
  transform ${ isMenuOpen ? 'translate-x-0' : '-translate-x-full '} transition-transform duration-1000 ease-in-out`}>
        <div className='border absolute top-0  h-screen rounded-xl grid grid-cols-1 m-1 w-56
        md:hidden'>
            <div className=' absolute z-10 w-6'>
                <AiOutlineCloseCircle className=' w-6 h-6 text-orange-400
                hover:text-purple-400 '
                onClick={closeMenu}/>
            </div>
            <div className=' bg-teal-700 rounded-lg w-[350px] overflow-scroll overflo h-[700px] text-center justify-center items-center mt-2'>
            <div className='grid grid-cols-1 text-white font-light'>
                <a href="" className=' py-px hover:bg-gray-900 hover:text-sky-500'>Men</a>
                <a href="" className=' py-px hover:bg-gray-900 hover:text-sky-500'>Women</a>
                <a href="" className=' py-px hover:bg-gray-900 hover:text-sky-500'>Kids</a>
                <a href="" className=' py-px hover:bg-gray-900 hover:text-sky-500'>Signatures</a>
                <a href="" className=' py-px hover:bg-gray-900 hover:text-sky-500'>Couples</a>
                <a href="" className=' py-px hover:bg-gray-900 hover:text-sky-500'>Intimates</a>
            </div>
            </div>
            <div className=' bg-teal-600'>
                <div className=' grid w-full mt-2 bg-teal-600 h-[300px] rounded-lg'>
                    <a href="" className=' text-white py-px hover:bg-gray-900 hover:text-sky-500 hover:transform transition-all hover:scale-90'>Delivery Policy</a>
                    <a href="" className=' text-white py-px hover:bg-gray-900 hover:text-sky-500 hover:transform transition-all hover:scale-90'>T&C</a>
                    <a href="" className=' text-white py-px hover:bg-gray-900 hover:text-sky-500 hover:transform transition-all hover:scale-90'>Customer Service</a>
                    <a href="" className=' text-white py-px hover:bg-gray-900 hover:text-sky-500 hover:transform transition-all hover:scale-90'>Sell with us</a>
                    <a href="" className=' text-white py-px hover:bg-gray-900 hover:text-sky-500 hover:transform transition-all hover:scale-90'>Invite</a>
                    <a href="" className=' text-white py-px hover:bg-gray-900 hover:text-sky-500 hover:transform transition-all hover:scale-90'> Payment Policy</a>
                </div>
            </div>
            <div className=' bg-teal-600 rounded-lg '>
                <div className=' grid grid-cols-2 gap-4 items-center justify-center text-center'>
                    <button className=' bg-black rounded-full text-white px-4
                     hover:text-sky-500 hover:bg-sky-100'>Account</button>
                      <button className=' bg-black rounded-full text-white px-4
                     hover:text-sky-500 hover:bg-sky-100'>Wishlist</button>
                      <button className=' bg-black rounded-full text-white px-4
                     hover:text-sky-500 hover:bg-sky-100'>View Cart</button>
                      <button className=' bg-black rounded-full text-white px-4
                     hover:text-sky-500 hover:bg-sky-100'>Contact</button>
                </div>
                <div className=' h-20 items-center justify-center flex '>
                    <h1 className=' font-extrabold'>Crafted Sole <small className=' font-thin'>tm</small></h1>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar