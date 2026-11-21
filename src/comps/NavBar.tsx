import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/svg/logo.svg'
import catalog from '../assets/svg/catalog.svg'
import search from '../assets/svg/search.svg'
import fave from '../assets/svg/fave.svg'
import profile from '../assets/svg/profile.svg'
import cart from '../assets/svg/cart.svg'
import x from '../assets/svg/x.svg'

const blurStart = 600;
const blurEnd = 100;

export default function NavBar() {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isBlurEnabled, setIsBlurEnabled] = useState(false);
  const [topPadding, setTopPadding] = useState(53);

  useEffect(() => {
    let lastY = Math.max(0, window.scrollY);
    setIsBlurEnabled(lastY >= blurStart);
    setTopPadding(Math.max(20, 53 - lastY));

    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      setTopPadding(Math.max(20, 53 - y));

      setIsBlurEnabled(enabled =>
        y >= blurStart || (enabled && y > blurEnd)
      );

      if (y !== 0 && Math.abs(y - lastY) < 5) return;

      setIsVisible(y === 0 || y < lastY);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{ paddingTop: topPadding }} className={`fixed inset-x-0 top-0 z-9999 flex w-full justify-between gap-5 px-[20px] pb-[20px] transition-[translate] duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <span
        className={`pointer-events-none absolute inset-x-0 -bottom-[24px] top-0 -z-10 bg-linear-to-b to-transparent backdrop-blur-[12px] backdrop-saturate-125 [mask-image:linear-gradient(to_bottom,white_0%,white_65%,transparent_100%)] transition-opacity duration-300 ease-out ${isBlurEnabled && isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className=' flex-[3.4] flex items-center'>
        <Link to="/" className='absolute pl-[40px]'>
          <img src={logo} alt="" />
        </Link>

        <ul className='flex items-center justify-evenly w-full'>
          <li className='ml-5'>
            <Link to="/catalog" className='flex gap-[1vw]'>
              <img src={catalog} alt="" className='w-4' />
              <span>
                Каталог
              </span>
            </Link>
          </li>
          <li>
            <ul className='flex gap-[2vw]'>
              <li>
                <Link to="/#blog">Блог</Link>
              </li>

              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='flex-1 flex justify-center'>
        <div
          className="group relative flex w-[90%] items-center justify-center"
        >
          <span
            className={`pointer-events-none absolute inset-y-0  -z-10  rounded-full bg-white/10 transition-[width,opacity] duration-150 group-focus-within:w-full group-focus-within:opacity-100 ${query ? "w-full opacity-100" : "w-0 opacity-0"}`} />

          <div
            className={`pointer-events-none absolute flex gap-2 transition-[left,translate] duration-150 group-focus-within:left-2 group-focus-within:translate-x-0 ${query
              ? "left-2 translate-x-0" : "left-1/2 -translate-x-1/2"}`}>
            <img
              src={search}
              alt=""
              className="pointer-events-none h-6 w-6"
            />
            <span
              className={`pointer-events-none transition-opacity duration-150 group-focus-within:opacity-0 ${query ? "opacity-0" : "opacity-100"}`}>
              Поиск
            </span>
          </div>

          <input
            type="search"
            className="z-999 w-full border-none bg-transparent px-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            type="button"
            disabled={!query}
            onClick={() => setQuery("")}
            className={`z-999 absolute right-2 transition-opacity duration-200 ${query ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
          >
            <img src={x} alt="" className="h-6 min-w-6" />
          </button>
        </div>

      </div>
      <div className=' flex-1 flex justify-center'>
        <ul className='flex items-center justify-between w-[50%]'>
          <li>
            <button type="button" className='flex cursor-pointer'>
              <img src={fave} alt="" className='h-6 min-w-6' />
            </button>
          </li>
          <li>
            <Link to="/login">
              <img src={profile} alt="" className='h-6 min-w-6' />
            </Link>
          </li>
          <li>
            <Link to="/checkout">
              <img src={cart} alt="" className='h-7 min-w-6' />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
