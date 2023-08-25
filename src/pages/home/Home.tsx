import { useEffect } from 'react'
import Slider from '../../components/Slider'
import Whatsapp from '../../components/WaComponent'
import useFetch from '../../hooks/useFetch'
import About from './About'
import scroll from '../../utils/scroll'
import { Iso } from '../../icons/icons'

type DataProps = {
  data: null | Array<{ id: number; image: string }>
  loading: boolean
}
const Home = () => {
  const { data, loading } = useFetch(`/home`) as DataProps

  useEffect(() => {
    scroll()
  }, [])

  return (
    <section id='home'>
      <div className='text-wrap max-w-4xl px-8 lg:px-24 py-12 pt-48 text-white '>
        <strong>Austral</strong> nace con una clara vocación para dar un servicio de calidad en el sector de la
        climatización, aunque somos una empresa joven tenemos más de 20 años de experiencia en el sector.
      </div>
      <div className='absolute z-30 left-0 px-8 lg:px-24'>
        <img
          src='./images/home.svg'
          alt='austral'
          className='w-[58vw] lg:w-[38vw]'
        />
      </div>

      <div className='flex justify-end'>
        <div className='w-9/12'>
          <section className='relative aspect-[4/5] lg:aspect-[6/4] bg-gray-200'>
            {!loading && <Slider data={data} />}
          </section>
          <About />
        </div>
      </div>

      <Whatsapp />

      <div className='bg-primary h-2/3 lg:h-screen w-full absolute top-0 -z-10'>
        <div className='absolute box-top text-white z-20'></div>
        <div className='absolute box-bottom flex flex-col items-center text-primary'>
          <div className='mb-12 box'></div>
          <div className='absolute box-iso'>
            <Iso />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
