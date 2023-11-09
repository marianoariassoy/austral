import { Logo, Down } from '../icons/icons'
import Social from '../components/Social'
import { Link, useLocation } from 'wouter'
import { useEffect, useState } from 'react'

const Header = () => {
  const [home, setHome] = useState(true)
  const location = useLocation()[0]

  useEffect(() => {
    location === '/' ? setHome(true) : setHome(false)
  }, [location])

  const OpenMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }
  const openSubMenu = () => {
    document.querySelector('.submenu-item')?.classList.toggle('hidden')
    document.querySelector('header section')?.classList.toggle('p-submenu')
  }

  return (
    <section className='fixed w-full px-8 lg:px-16 py-12 flex justify-between text-white z-50 bg-primary transition-all overflow-hidden'>
      <div>
        {!home ? (
          <Link href='/home'>
            <a className='hover:blur-sm logo'>
              <Logo />
            </a>
          </Link>
        ) : (
          <a
            href='#home'
            className='scroll hover:blur-sm logo'
          >
            <Logo />
          </a>
        )}
      </div>
      <div className='mt-4 flex gap-x-8 items-center'>
        <nav className='hidden lg:inline-block nav-main'>
          <ul className='flex gap-x-8 font-secondary'>
            <li>
              {!home ? (
                <Link href='/home'>
                  <a className='hover-underline-animation'>Home</a>
                </Link>
              ) : (
                <a
                  href='#home'
                  className='scroll hover-underline-animation'
                >
                  Home
                </a>
              )}
            </li>
            <li>
              {!home ? (
                <Link href='/somosaustral'>
                  <a className='hover-underline-animation'>Somos Austral</a>
                </Link>
              ) : (
                <a
                  href='#somosaustral'
                  className='scroll hover-underline-animation'
                >
                  Somos Austral
                </a>
              )}
            </li>
            <li
              onClick={openSubMenu}
              className='cursor-pointer'
            >
              <a className='hover-underline-animation'>
                <span className='inline-block'>Productos</span>
                <span className='inline-block ml-1'>
                  <Down />
                </span>
              </a>

              <div className='submenu-item absolute hidden'>
                <div className='flex flex-col gap-y-1 mt-1 items-start'>
                  <Link href='/ventilacion'>
                    <a className={`${location === '/ventilacion' ? 'nav-active' : 'hover:opacity-70'}`}>Ventilación</a>
                  </Link>
                  <Link href='/aire-acondicionado'>
                    <a className={`${location === '/aire-acondicionado' ? 'nav-active' : 'hover:opacity-70'}`}>
                      Aire Acondicionado
                    </a>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link href='/obras'>
                <a className={`${location === '/obras' ? 'nav-active' : 'hover-underline-animation'}`}>Obras</a>
              </Link>
            </li>
            <li>
              {!home ? (
                <Link href='/servicios'>
                  <a className='hover-underline-animation'>Servicios</a>
                </Link>
              ) : (
                <a
                  href='#servicios'
                  className='scroll hover-underline-animation'
                >
                  Servicios
                </a>
              )}
            </li>
            <li>
              {!home ? (
                <Link href='/clientes'>
                  <a className='hover-underline-animation'>Nuestros Proyectos</a>
                </Link>
              ) : (
                <a
                  href='#clientes'
                  className='scroll hover-underline-animation'
                >
                  Nuestros Proyectos
                </a>
              )}
            </li>
            <li className='mx-8'>
              {!home ? (
                <Link href='/contacto'>
                  <a className='hover-underline-animation'>Contacto</a>
                </Link>
              ) : (
                <a
                  href='#contacto'
                  className='scroll hover-underline-animation'
                >
                  Contacto
                </a>
              )}
            </li>
          </ul>
        </nav>
        <Social />
        <div
          className='nav-menu'
          onClick={OpenMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Header
