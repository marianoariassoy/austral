import { Logo } from '../icons/icons'
import { nav } from '../data/data'
import Social from '../components/Social'

const Footer = () => {
  return (
    <section className='px-8 lg:px-16 py-16 flex justify-between text-white bg-primary'>
      <div>
        <nav className='mb-8'>
          <ul className='flex flex-col font-secondary'>
            {nav
              .filter(item => item.id !== 3)
              .map(item => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className='scroll hover:opacity-75'
                  >
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <Social />
      </div>
      <div className='logo'>
        <Logo />
      </div>
    </section>
  )
}

export default Footer
