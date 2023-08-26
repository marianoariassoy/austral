import ServiciosItem from './ServiciosItem'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Back, Forward } from '../../icons/icons'
const Servicios = () => {
  const properties = {
    prevArrow: (
      <button className='text-primary ml-8 hover:-translate-x-0.5 transition-all back-button'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='text-primary mr-8 hover:translate-x-0.5 transition-all forward-button'>
        <Forward />
      </button>
    ),
    autoplay: false,
    transitionDuration: 400,
    indicators: false,
    arrows: true
  }

  return (
    <section
      className='lg:h-screen bg-secondary section'
      id='servicios'
    >
      <Slide {...properties}>
        <ServiciosItem />
        <ServiciosItem />
        <ServiciosItem />
      </Slide>
    </section>
  )
}

export default Servicios
