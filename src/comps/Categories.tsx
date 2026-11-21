import React from 'react'
import ellips from '../assets/svg/ellips.svg'
import arrowDown from '../assets/svg/arrow-down.svg'
import { categories } from '../data'


export default function Categories() {
  return (
    <section>

      <h2 className='uppercase text-[60px] text-center pb-[70px] font-medium'>Категории</h2>

      <ul className='flex gap-[clamp(16px,3vw,65px)] justify-between px-[clamp(16px,2.4vw,45px)]'>
        {categories.map((category) => (
          <li key={category.title} className='@container relative h-[520px] min-w-0 flex-1'>
            <h3 className='uppercase text-[28px] max-w-[150px] leading-[36px] font-medium pt-[40px]'>{category.title}</h3>
            <img src={category.src} alt="" className='absolute left-1/2 top-[230px] max-h-[248px] max-w-[65%] -translate-x-1/2 -translate-y-1/2 object-contain' />
            <div className='z-999 pointer-events-none absolute inset-0 '>

            </div>
            <img src={ellips} alt="" className='absolute left-0 top-0 -z-99 h-[461px] w-full' />
            <div className='absolute -right-[min(30px,7.7cqw)] top-[186px] flex aspect-[81/72] w-[min(81px,21cqw)] -translate-y-1/2 -rotate-[23deg] items-center justify-center rounded-[50%] bg-pink'>
              <p className='translate-y-[min(4px,1cqw)] whitespace-nowrap'><span className='mr-[min(5px,1.3cqw)] font-floreste text-[min(40px,10.3cqw)]'>{category.count}</span><span className='text-[min(15px,3.9cqw)]'>шт</span></p>
            </div>
            <button className='absolute left-1/2 top-[469.5px] flex aspect-square w-[min(101px,26cqw)] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[50%] border-2 border-lime bg-pale-lavender/20'>
              <img src={arrowDown} alt="" className='h-auto w-[min(22px,5.7cqw)]' />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
