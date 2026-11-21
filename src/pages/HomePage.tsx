import React from 'react'
import Hero from '../comps/Hero'
import Categories from '../comps/Categories'
import star from '../assets/svg/star.svg'
import Blog from '../comps/Blog'

export default function HomePage() {
  return (
    <>
      <Hero />
      <hr className='border-0 h-[170px]' />
      <Categories />
      <hr className='border-0 h-[170px]' />
      <div className='relative h-[260px]'>
        {[
          { bg: "bg-lavender", rotate: "rotate-5" },
          { bg: "bg-sky-blue", rotate: "-rotate-2", }
        ].map((item, i) => (
          <div className={` absolute left-1/2 flex h-[72px] w-[120%]
        -translate-x-1/2  gap-[66px] ${item.bg} ${item.rotate}`}>
            {Array.from({ length: 10 }, (_, i) => (
              <span className='flex shrink-0 items-center gap-[66px]'>
                <span className='uppercase font-floreste text-[40px]  translate-y-[5px]'>Creating a great art  </span>
                <img src={star} alt="" />
              </span>
            ))}
          </div>
        ))}
      </div>
      <Blog />
    </>
  )
}
