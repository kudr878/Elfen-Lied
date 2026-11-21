import React, { useEffect, useState } from 'react'
import { items } from '../data'
import cart from '../assets/svg/cart-lime.svg'


export default function Hero() {
  const [expand, setExpand] = useState(0)

  return (
    <section className='relative flex justify-between gap-5 h-[1036px]'>


      {items.map((item, i) => {
        const isExpanded = expand === i

        return (
          <div
            key={item.alt}
            className={`flex flex-col justify-center transition-all duration-500 rounded-[50px] relative ${item.bg} ${isExpanded ? "flex-[3.4]" : "flex-1 cursor-pointer"}`}
          >
            <img src={item.src} alt={item.alt} className={`z-999 max-h-[630px] drop-shadow-[12px_16px_20px_rgba(0,0,0,0.3)] object-contain absolute transition-all duration-300 left-1/2 -translate-x-1/2 ${isExpanded ? "h-[725px] -translate-y-[11.5px]" : "h-[295px] -translate-y-[50.5px] rotate-5"}`} />

            <div
              className={`pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-x-clip px-[40px] transition-opacity duration-300 delay-200 ${isExpanded ? "opacity-100" : "opacity-0"}`}
            >
              <p className='mb-[31px] uppercase text-lime '>Товар дня</p>
              <p className={`uppercase text-[11cqw] leading-[201px] whitespace-nowrap font-floreste ${i === 0 ? "text-lavender/60" : i === 1 ? "text-pinkie/60" : "text-bluie/60"}`}>Benjamin Moore</p>
            </div>

            <div
              className={`absolute inset-x-0 bottom-0 pb-[80px] flex items-end justify-between overflow-x-clip px-[40px] transition-opacity duration-300 delay-200 ${isExpanded ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <div className='max-w-[300px]'>
                <p className='uppercase font-medium text-[28px] mb-[10px] leading-[28px]'>{item.itemTitle}</p>
                <p className='font-medium text-[15px] mb-[28px] leading-[20px] '>{item.desc}</p>
                <hr className='text-white/20 mb-[28px]' />
                <p className='leading-[39px] text-lime flex gap-[7px]'>
                  <span className='font-floreste text-[40px] '>{item.price}</span>
                  <span className='text-[20px] leading-4 font-sans'>₽</span>
                </p>

              </div>

              <div
                className={`transition-opacity delay-200 duration-300 ${isExpanded ? "opacity-100 " : "pointer-events-none opacity-0 "}`}
              >
                <button
                  type="button"
                  className="relative flex h-[135px] w-[356px] items-center justify-center cursor-pointer"
                >
                  <span
                    className="pointer-events-none absolute inset-0 -rotate-[13deg] rounded-[50%] border-2 border-lime bg-white/50"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 -rotate-[2deg] rounded-[50%] border-2 border-lime"
                  />
                  <div className='flex gap-[10px]'>
                    <img src={cart} alt="" />
                    <span className="relative z-10">Купить</span>
                  </div>
                </button>
              </div>
            </div>
            <div
              className={`pointer-events-none absolute inset-0 text-center flex flex-col gap-[40px] pb-[70px] h-full justify-end transition-opacity duration-300 ${isExpanded ? "opacity-0" : "opacity-100"}`}
            >
              <p className='uppercase text-[15px] text-white/60 '>Слайд</p>
              <p className='text-[40px] tracking-[0.04em] leading-[38px] font-floreste '>0{i + 1}</p>
            </div>
          </div>
        )
      })
      }
    </section >
  )
}
