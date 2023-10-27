import { useEffect } from 'react'
import Slider from '../../components/Slider'
import Whatsapp from '../../components/WaComponent'
import useFetch from '../../hooks/useFetch'
import scroll from '../../utils/scroll'
import { Iso } from '../../icons/icons'
import About from './About'
import TextHTML from '../../hooks/useHTML'

type DataProps = {
  data: null | Array<{ id: number; image: string; text?: string }>
  loading: boolean
}
const Home = () => {
  const { data, loading } = useFetch(`/home`) as DataProps
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos`) as DataProps

  useEffect(() => {
    scroll()
  }, [])

  return (
    <section
      className='section'
      id='home'
    >
      <div className='text-wrap max-w-4xl px-8 lg:px-24 py-12 pt-36 lg:pt-48 text-white text-wrap'>
        {!loadingTexts && <TextHTML text={dataTexts[0].text} />}
      </div>
      <div className='absolute z-30 left-0 px-8 pt-4 lg:px-24'>
        <img
          src='./images/home.svg'
          alt='austral'
          className='w-[60vw] lg:w-[36vw]'
        />
      </div>

      <div className='flex justify-end'>
        <div className='w-9/12'>
          <section className='relative aspect-[4/5] lg:aspect-[6/4] cover bg-center bg-cover'>
            {!loading && <Slider data={data} />}
          </section>
          <About />
        </div>
      </div>

      <Whatsapp />

      <div className='bg-primary h-4/5 lg:h-screen w-full absolute top-0 -z-10'>
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
