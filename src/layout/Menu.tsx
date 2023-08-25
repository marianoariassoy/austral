import { nav } from '../data/data'
import { Down } from '../icons/icons'
import { Link } from 'wouter'

const Menu = () => {
  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <nav
      className='fixed fade-in w-full h-full text-white top-0 text-center grid content-center hidden menu-mobile z-40'
      onClick={closeMenu}
    >
      <ul className='flex flex-col gap-y-4 font-secondary text-xl'>
        {nav.map(item => (
          <li key={item.id}>
            <a
              href={item.path}
              className='scroll flex justify-center hover:text-black'
            >
              <div className='flex items-center gap-x-2'>
                {item.title} {item.id === 3 && <Down />}
              </div>
            </a>
            {item.id === 3 && (
              <div className='flex flex-col'>
                <Link href='/ventilacion'>
                  <a className='hover-underline-animation'>Ventilación</a>
                </Link>
                <Link href='/aire-acondicionado'>
                  <a className='hover-underline-animation'>Aire Acondicionado</a>
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
