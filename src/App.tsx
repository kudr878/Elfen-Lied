import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ContactsPage from './pages/ContactsPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderSuccessPage from './pages/OrderSuccessPage'
import NavBar from './comps/NavBar'
import Footer from './comps/Footer'

const titles: Record<string, string> = {
  '/': 'Elfen Lied — Главная',
  '/catalog': 'Elfen Lied — Каталог',
  '/login': 'Elfen Lied — Вход',
  '/register': 'Elfen Lied — Регистрация',
  '/contacts': 'Elfen Lied — Контакты',
  '/checkout': 'Elfen Lied — Оформление заказа',
  '/order-success': 'Elfen Lied — Заказ оформлен',
}

export default function App() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] ?? 'Elfen Lied'

    const target = hash ? document.querySelector(hash) : null

    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth' })
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="px-[20px] flex flex-col min-h-screen pt-5 overflow-x-clip">
      <header>
        <NavBar />
      </header>

      <main className='flex-1'>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />

        </Routes>
      </main>

      <Footer />
    </div>
  )
}
