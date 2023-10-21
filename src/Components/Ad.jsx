import React, {useState, useEffect} from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { GiPaintBrush } from 'react-icons/gi';
import { MdLocalOffer, MdMobileFriendly } from 'react-icons/md'
import { SiThreedotjs } from 'react-icons/si';

function Ad() {
    const AdData = [
        {
          id: 1,
          text: "Remarkable experience with the ",
          subtitle: ' Get your products paid through ',
          bold:'Go Pay',
          last: 'Payment App',
          lastsub: 'Go pay',
          lastname: 'easily',
          icon: <MdMobileFriendly  className=' text-black w-6 h-6' />,
        },
        {
          id: 2,
          text: "Get the full",
          subtitle: 'It is all in our',
          bold:" Crafted Sole's",
          last: 'offer',
          lastsub: 'special offers',
          lastname: 'section',
          icon: <MdLocalOffer  className=' text-black w-6 h-6' />,
        },
        {
          id: 3,
          text: "A better ecommerce experience with the ",
          subtitle: 'Attach images ',
          bold:'Self-customization',
          last: 'tool',
          lastsub: 'on the cloth',
          lastname: ' models available',
          icon: <SiThreedotjs  className=' text-black w-6 h-6' />,
        },
        {
          id: 4,
          text: "Still a crafter in Heart?",
          subtitle: 'Get discounted prices on favorite',
          bold:' Our Coupon offers',
          last: ' are here',
          lastsub: 'Craft',
          lastname: 'deals',
          icon: <GiPaintBrush  className=' text-black w-6 h-6' />,
        },
    
      ];
    
      const [currentAdData, setcurrentAdData] = useState(0);
      const handleNext = () => {
        setcurrentAdData((prevIndex) => (prevIndex + 1) % AdData.length);
      };
      const handlePrev = () => {
        setcurrentAdData((prevIndex) => (prevIndex - 1 + AdData.length) % AdData.length)
      };
    
      const currentData = AdData[currentAdData];
    
      useEffect(() => {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval); 
      }, [currentData, AdData]);
      
  return (
    <div>
        <div className=' bg-teal-600 flex items-center justify-between h-[4.7rem] sm:h-[5rem]'>
        <div className='  items-center justify-center flex'>
            <BiLeftArrowAlt className=' w-[30px] h-[30px] text-white' onClick={handlePrev} />
            </div>
             <div className=' flex justify-between'>
           
            <div>
                <div className='  items-center flex flex-col text-center'>
                    <h1 className=' uppercase font-medium text-white text-base sm:text-2xl'>{currentData.text}<span className=' text-stone-900'>{currentData.bold} </span>{currentData.last} <span className=' text-stone-900'>.</span></h1>
                    <small className=' text-slate-100 flex flex-wrap items-center text-center gap-2'>{currentData.icon}{currentData.subtitle}<span className=' text-stone-900'>{currentData.lastsub}</span>{currentData.lastname}</small>
                </div>
            </div>
            
            </div>
            <div className='  items-center justify-center flex'>
            <BiRightArrowAlt className=' w-[30px] h-[30px] text-white' onClick={handleNext} />
            </div>
        </div>
    </div>
  )
}

export default Ad