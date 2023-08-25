import { Bar } from '../../icons/icons'
import useFetch from '../../hooks/useFetch'
import Slider from '../../components/SliderServicios'

type DataProps = {
  data: null | Array<{ id: number; image: string }>
  loading: boolean
}
const ServiciosItem = () => {
  const { data, loading } = useFetch(`/home`) as DataProps

  return (
    <article className='h-full lg:flex'>
      <section className='w-full lg:w-2/5 lg:h-screen relative'>{!loading && <Slider data={data} />}</section>
      <section className='lg:w-3/5 py-20 px-8 lg:pl-20 lg:pr-32 lg:pt-36'>
        <h1 className='text-5xl lg:text-7xl text-primary mb-4'>
          <strong>SERVICIOS</strong>
        </h1>
        <p className='text-wrap lg:text-xl'>
          Nuestro servicio de elaboración de proyectos, provisión e instalación abarca un amplio espectro de sistemas,
          entre otros:
        </p>
        <div className='text-primary flex justify-end my-4 lg:mb-24 lg:mt-8 '>
          <Bar />
        </div>

        <section className='flex flex-col gap-y-4 lg:gap-y-8'>
          <div>
            <img
              src='./images/service1.svg'
              alt=''
            />
          </div>
          <h2 className='text-3xl text-primary'>
            <strong>Sistemas on/off e inverter:</strong>
          </h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ratione error doloribus, ullam nihil rem
            possimus ex non quos? Commodi enim accusamus molestias impedit reprehenderit! Temporibus natus magnam
            accusamus ab. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam doloribus? Quidem in quasi, neque
            vel culpa dolore, labore magni itaque voluptatum voluptas nihil non tenetur deleniti blanditiis sapiente
            sequi.
          </div>
        </section>
      </section>
    </article>
  )
}

export default ServiciosItem
