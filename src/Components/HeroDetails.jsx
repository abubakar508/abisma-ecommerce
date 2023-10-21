import React, {useState, useEffect} from 'react'
import heroImage from '../Assets/banner-girl-1.png'
import heroImage1 from '../Assets/collpop.png'
import heroImage2 from '../Assets/9.png'
import heroImage3 from '../Assets/blue.png'

function HeroDetails() {
  const heroData = [
    {
      id: 1,
      image: heroImage,
    },
    {
      id: 2,
      image: heroImage1,
    },
    {
      id: 3,
      image: heroImage2,
    },
    {
      id: 4,
      image: heroImage3,
    },

  ];

  const [currentHeroIndex, setcurrentHeroIndex] = useState(0);
  const handleNext = () => {
    setcurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroData.length);
  };
  const handlePrev = () => {
    setcurrentHeroIndex((prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length)
  };

  const currentHero = heroData[currentHeroIndex];

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval); 
  }, [currentHero, heroData]);
  
  return (
    <div>
     <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 border mt-32 mb-16">
  <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg z-30 bg-gradient-to-t from-black/90 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 className="mt-1 text-lg font-semibold font-montserrat text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Crafted with high expertise!</h1>
      <p className="text-sm leading-4 font-montserrat font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">In colors, We Craft.</p>
    </div>
    <div className=" relative grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
    <div className=" flex flex-row left-3 bottom-[70px] gap-2 absolute
      sm:top-3 sm:right-0 sm:flex-col z-40">
        {heroData.map((heroData, index) => (
          <span id={heroData.id}
            key={heroData.id}
            className={` w-[40px] h-[10px] sm:w-[10px] sm:h-[40px] cursor-pointer ${currentHeroIndex === index ? 'bg-teal-600' : ' bg-sky-500'}`}
            onClick={() => setcurrentHeroIndex(index)}
          />
        ))}
      </div>
      <img src={currentHero.image} alt className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
      <img src={heroImage1} alt className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32  hover:animate-pulse " loading="lazy" />
      <img src={heroImage2} alt className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32 hover:animate-pulse" loading="lazy" />
    </div>
    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
      <dt className="sr-only">Location</dt>
      <dd className="flex font-montserrat items-center">
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
        Kajiado, Kenya
      </dd>
    </dl>
    <div className="mt-4 font-montserrat col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <button type="button" className="bg-sky-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Shop Now</button>
    </div>
    <p className="mt-4 font-montserrat text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
      Experience fashion that goes beyond the ordinary. Crafted Sole empowers you to express yourself through clothing and shoes that are meticulously made with love and creativity.
    </p>
  </div>
</main>


    </div>
  )
}

export default HeroDetails