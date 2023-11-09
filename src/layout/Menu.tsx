import { nav } from '../data/data'
import { Down } from '../icons/icons'
import { Link, useLocation } from 'wouter'
import { useEffect, useState } from 'react'

const Menu = () => {
  const location = useLocation()[0]
  const [home, setHome] = useState(true)

  useEffect(() => {
    location === '/' ? setHome(true) : setHome(false)
  }, [location])

  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <nav
      className='fixed fade-in w-full h-full text-white bg-primary top-0 text-center grid content-center menu-mobile z-40 hidden'
      onClick={closeMenu}
    >
      <ul className='flex flex-col gap-y-4 font-secondary text-xl'>
        {nav.map(item => (
          <li key={item.id}>
            {!home ? (
              <Link href={`/${item.path?.substring(1)}`}>
                <a className='flex justify-center hover:text-black'>
                  <div className='flex items-center gap-x-2'>
                    {item.title} {item.id === 3 && <Down />}
                  </div>
                </a>
              </Link>
            ) : (
              <a
                href={item.path}
                className='scroll flex justify-center hover:text-black'
              >
                <div className='flex items-center gap-x-2'>
                  {item.title} {item.id === 3 && <Down />}
                </div>
              </a>
            )}

            {item.id === 3 && (
              <div className='flex flex-col'>
                <Link href='/ventilacion'>
                  <a className={`${location === '/ventilacion' ? 'nav-active' : ''}`}>Ventilación</a>
                </Link>
                <Link href='/aire-acondicionado'>
                  <a className={`${location === '/aire-acondicionado' ? 'nav-active' : ''}`}>Aire Acondicionado</a>
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
