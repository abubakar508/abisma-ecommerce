import React from 'react'
import heroImage3 from '../Assets/blue.png'
import firecouple from '../Assets/firecouple.png'
import jewellery from '../Assets/jewellery.png'
import brownhijabi from '../Assets/brownhijabi.png'
import corange from '../Assets/coupleorange.png'
import womancap from '../Assets/womancap.png'
import african3 from '../Assets/african-3.png'
import african6 from '../Assets/african-6.png'
import trending4 from '../Assets/banner-girl-1.png'
import trending10 from '../Assets/2.png'
import trending5 from '../Assets/3.png'
import trending6 from '../Assets/6.png'
import {BiMessageRounded} from 'react-icons/bi'
import { Link } from 'react-router-dom'
function Blog() {
    const blogData = [
        {
            date: '25th September 2022',
            img: firecouple,
            author: 'I M Abu-Bakr',
            reply: '24',
            category: {
                1: 'Learning',
                2: 'News',
                3: 'Fashion'
            },
            title: 'Craft the best out of our offers and blah blah blah!',
            text: 'Lorem ipsum dolor sit amet is a dummy text of the printing and typesetting industry.',
            buttonBlog: {
                1: 'Travel',
                2: 'Attire',
                3: 'Culture'
            }
        },
        {
            date: '10th October 2022',
            img: jewellery,
            author: 'Jane Doe',
            reply: '32',
            category: {
                1: 'Technology',
                2: 'Fashion',
                3: 'Lifestyle'
            },
            title: 'Discover the Latest Tech Gadgets for Modern Living',
            text: 'Explore the most innovative tech gadgets that are shaping the future of modern living.',
            buttonBlog: {
                1: 'Gadgets',
                2: 'Fashion',
                3: 'Lifestyle'
            }
        },
        {
            date: '18th November 2022',
            img: brownhijabi,
            author: 'John Smith',
            reply: '18',
            category: {
                1: 'Travel',
                2: 'Food',
                3: 'Adventure'
            },
            title: 'Culinary Adventures Around the World',
            text: 'Embark on a culinary journey to savor the flavors of diverse cuisines from across the globe.',
            buttonBlog: {
                1: 'Travel',
                2: 'Food',
                3: 'Adventure'
            }
        },
        {
            date: '5th December 2022',
            img: heroImage3,
            author: 'Amanda Johnson',
            reply: '45',
            category: {
                1: 'Health',
                2: 'Fitness',
                3: 'Wellness'
            },
            title: 'Achieve Your Fitness Goals with Our Workout Tips',
            text: 'Get expert advice on workouts, nutrition, and wellness to help you achieve your fitness goals.',
            buttonBlog: {
                1: 'Fitness',
                2: 'Nutrition',
                3: 'Wellness'
            }
        },
        {
            date: '20th January 2023',
            img: african6,
            author: 'David Brown',
            reply: '28',
            category: {
                1: 'Home Decor',
                2: 'Lifestyle',
                3: 'Fashion'
            },
            title: 'Transform Your Living Space with Trendy Home Decor',
            text: 'Discover the latest trends in home decor and revamp your living space with style.',
            buttonBlog: {
                1: 'Home Decor',
                2: 'Lifestyle',
                3: 'Fashion'
            }
        },
        {
            date: '8th February 2023',
            img: womancap,
            author: 'Emily White',
            reply: '19',
            category: {
                1: 'Technology',
                2: 'News',
                3: 'Innovation'
            },
            title: 'The Future of Technology: Innovations to Watch Out For',
            text: 'Stay ahead of the curve with insights into upcoming technological innovations and trends.',
            buttonBlog: {
                1: 'Technology',
                2: 'News',
                3: 'Innovation'
            }
        },
        {
            date: '12th October 2022',
            img: corange,
            author: 'Samantha Taylor',
            reply: '37',
            category: {
                1: 'Food',
                2: 'Cooking',
                3: 'Health'
            },
            title: 'Exploring the Art of Gourmet Cooking',
            text: 'Delve into the world of gourmet cooking and elevate your culinary skills to new heights.',
            buttonBlog: {
                1: 'Recipes',
                2: 'Cooking Tips',
                3: 'Health'
            }
        },
        {
            date: '5th November 2022',
            img: trending10,
            author: 'Michael Rodriguez',
            reply: '21',
            category: {
                1: 'Travel',
                2: 'Adventure',
                3: 'Culture'
            },
            title: 'Uncover Hidden Gems: Off the Beaten Path Travel Destinations',
            text: 'Escape the tourist crowds and explore unique travel destinations that are off the beaten path.',
            buttonBlog: {
                1: 'Travel',
                2: 'Adventure',
                3: 'Culture'
            }
        },
        {
            date: '20th December 2022',
            img: trending4,
            author: 'Ella Anderson',
            reply: '52',
            category: {
                1: 'Fashion',
                2: 'Style',
                3: 'Trends'
            },
            title: 'Fashion Forward: Embracing the Latest Style Trends',
            text: 'Stay ahead of the fashion curve with insights into the latest style trends and fashion tips.',
            buttonBlog: {
                1: 'Fashion',
                2: 'Style',
                3: 'Trends'
            }
        },
        {
            date: '8th January 2023',
            img: trending5,
            author: 'Daniel Moore',
            reply: '29',
            category: {
                1: 'Technology',
                2: 'Gadgets',
                3: 'Innovation'
            },
            title: 'Tech Enthusiast’s Paradise: Must-Have Gadgets of the Year',
            text: 'Discover the must-have gadgets that every tech enthusiast should own in the current year.',
            buttonBlog: {
                1: 'Technology',
                2: 'Gadgets',
                3: 'Innovation'
            }
        },
        {
            date: '18th February 2023',
            img: trending6,
            author: 'Olivia Parker',
            reply: '16',
            category: {
                1: 'Health',
                2: 'Wellness',
                3: 'Fitness'
            },
            title: 'Mind and Body Wellness: A Holistic Approach to Healthy Living',
            text: 'Learn about holistic wellness practices that promote a balanced and healthy mind and body.',
            buttonBlog: {
                1: 'Wellness',
                2: 'Mindfulness',
                3: 'Fitness'
            }
        }
    ];
  return (
    <div>
        <div className=' flex gap-2 flex-col sm:flex-row'>
        <section className=' flex flex-col sm:w-[300px] border font-montserrat'>
            <div className=' border m-2 pb-2 items-center flex flex-col gap-3'>
                <h1 className=' text-sky-500 uppercase text-center'>Search</h1>
                <input type="text" className=' ring-sky-500 border p-1 rounded-full placeholder:text-sky-500 
                ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-sky-500 ' placeholder='Search for Craft Blog...' />
            </div>
            <div>
                <h1 className=' uppercase text-center'>Categories</h1>
                <ul className=' list-none border m-2'>
                <li className=' hover:text-sky-500 cursor-pointer'>Corporate</li>
                <li className=' hover:text-sky-500 cursor-pointer'>Design</li>
                <li className=' hover:text-sky-500 cursor-pointer'>Fashion</li>
                <li className=' hover:text-sky-500 cursor-pointer'>Creative</li>
                <li className=' hover:text-sky-500 cursor-pointer'>Photography</li>
                </ul>
            </div>
            <div>
                <ul className=' border m-2'>
                <h1 className=' uppercase text-center'>Archives</h1>
                <li className=' hover:text-sky-500 cursor-pointer'>March</li>
                <li className=' hover:text-sky-500 cursor-pointer'>December</li>
                <li className=' hover:text-sky-500 cursor-pointer'>August</li>
                <li className=' hover:text-sky-500 cursor-pointer'>April</li>
                <li className=' hover:text-sky-500 cursor-pointer'>January</li>
                </ul>
            </div>
            <div>
                <h1 className=' uppercase text-center'>Recent Posts</h1>
                <div className=' m-2'>
                <address className=' text-center'>25 July 2023</address>
                <h2 className=' text-md text-sky-500'>Lorem ipsum dolor sit amet!</h2>
                <small className=' text-xs text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, ad laboriosam! Nihil iusto recusandae saepe quos, laudantium voluptatum quia inventore hic facilis voluptas. </small>
                </div>
            </div>
            <div>
                <h1 className=' text-center uppercase'>Recent comments</h1>
                <div className=' flex gap-3'>
                    <small className=' text-sm text-sky-500'>Admin on</small>{" "}
                    <small className='text-sm font-bold'>Title of the blog</small>
                </div>
            </div>
            <div className=' mt-2 border m-2'>
                <h1 className=' text-center uppercase'>Tags</h1>

                <button className=' border-[2px] border-sky-500 rounded-full text-sky-500 p-1 mb-1 mr-1 hover:bg-sky-500 hover:text-black'> Dresses</button>
                <button className=' border-[2px] border-sky-500 rounded-full text-sky-500 p-1 mb-1 mr-1 hover:bg-sky-500 hover:text-black'> Women</button>
                <button className=' border-[2px] border-sky-500 rounded-full text-sky-500 p-1 mb-1 mr-1 hover:bg-sky-500 hover:text-black'> Fashion</button>
                <button className=' border-[2px] border-sky-500 rounded-full text-sky-500 p-1 mb-1 mr-1 hover:bg-sky-500 hover:text-black'> Legacy</button>
                <button className=' border-[2px] border-sky-500 rounded-full text-sky-500 p-1 mb-1 mr-1 hover:bg-sky-500 hover:text-black'> E-commerce</button>
                <button className=' border-[2px] border-sky-500 rounded-full text-sky-500 p-1 mb-1 mr-1 hover:bg-sky-500 hover:text-black'> Shop</button>
                <button className=' border-[2px] border-sky-500 rounded-full text-sky-500 p-1 mb-1 mr-1 hover:bg-sky-500 hover:text-black'> Kenya</button>
            </div>
        </section>
        <section className=' flex flex-wrap items-center justify-center'>
            {blogData.map((blogData, index) => {
                return (
                    <Link to='/BlogDetail'><div className=' border m-3 w-[420px] rounded-xl'>
                    <div className=' m-2 rounded-md'>
                    <img src={blogData.img} alt="" className=' rounded-md w-[400px] h-[400px]' />
                    </div>
                    <div className=' flex justify-around m-2 font-montserrat'>
                        <span className=' text-sky-500'>{blogData.date}</span>
                        <span className='text-sky-400'>By {blogData.author}</span>
                        <span className=' flex text-red-500'><BiMessageRounded/>{blogData.reply}</span>
                    </div>
                    <div className=' flex gap-3 m-2 justify-around'>
                        <span className=' underline text-sky-500 font-montserrat'>{blogData.category[1]}</span>
                        <span className=' underline text-sky-500 font-montserrat'>{blogData.category[2]}</span>
                        <span className=' underline text-sky-500 font-montserrat'>{blogData.category[3]}</span>
                    </div>
                    <div className=' flex flex-col gap-2 font-montserrat m-2'>
                        <h1 className=' text-md font-bold text-sky-500'>{blogData.title}</h1>
                        <small className=' text-slate-400'>{blogData.text}</small>
                    </div>
                    <div className=' justify-around flex underline font-montserrat text-sky-500 m-2'>
                        <button>{blogData.buttonBlog[1]}</button>
                        <button>{blogData.buttonBlog[2]}</button>
                        <button>{blogData.buttonBlog[3]}</button>
                    </div>
                </div>
                </Link>
                )
            })}
           
        </section>
    </div>
    </div>
  )
}

export default Blog