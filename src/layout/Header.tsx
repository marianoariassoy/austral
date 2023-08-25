import { Logo, Down } from '../icons/icons'
import Social from '../components/Social'
import { Link, useRoute } from 'wouter'
const Header = () => {
  const [isActiveVentilacion] = useRoute('/ventilacion')
  const [isActiveAire] = useRoute('/aire-acondicionado')

  const OpenMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }
  const openSubMenu = () => {
    document.querySelector('.submenu-item')?.classList.toggle('hidden')
  }

  return (
    <section className='fixed w-full px-8 lg:px-16 py-12 flex justify-between text-white z-50 bg-primary'>
      <div>
        <a
          href='#home'
          className='scroll hover:blur-sm logo'
        >
          <Logo />
        </a>
      </div>
      <div className='mt-4 flex gap-x-8 items-center'>
        <nav className='hidden lg:inline-block'>
          <ul className='flex gap-x-8 font-secondary'>
            <li>
              {isActiveVentilacion || isActiveAire ? (
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
              {isActiveVentilacion || isActiveAire ? (
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
              <div className='flex gap-x-2 items-center'>
                Productos <Down />
              </div>

              <div className='submenu-item absolute hidden'>
                <div className='flex flex-col  items-start'>
                  <Link href='/ventilacion'>
                    <a className={` ${isActiveVentilacion ? 'font-secondary-bold' : 'hover-underline-animation'}`}>
                      Ventilación
                    </a>
                  </Link>
                  <Link href='/aire-acondicionado'>
                    <a className={` ${isActiveAire ? 'font-secondary-bold' : 'hover-underline-animation'}`}>
                      Aire Acondicionado
                    </a>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              {isActiveVentilacion || isActiveAire ? (
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
              {isActiveVentilacion || isActiveAire ? (
                <Link href='/clientes'>
                  <a className='hover-underline-animation'>Nuestros Clientes</a>
                </Link>
              ) : (
                <a
                  href='#clientes'
                  className='scroll hover-underline-animation'
                >
                  Nuestros Clientes
                </a>
              )}
            </li>
            <li className='mx-8'>
              {isActiveVentilacion || isActiveAire ? (
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
