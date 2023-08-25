import { Facebook, Instagram, Linkedln } from '../icons/icons'

const Social = () => {
  return (
    <nav className='flex gap-x-4 social-icons'>
      <a
        href='https://www.facebook.com/profile.php?id=100051037484481&mibextid=D4KYlr '
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-75'
      >
        <Facebook />
      </a>
      <a
        href='https://www.instagram.com/austral.salta/'
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-75'
      >
        <Instagram />
      </a>
      <a
        href='https://www.linkedin.com/in/austral-ingenieria-en-climatizacion-3202b624b/'
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-75'
      >
        <Linkedln />
      </a>
    </nav>
  )
}

export default Social
