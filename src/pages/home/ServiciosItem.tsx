import { Bar } from '../../icons/icons'
import useFetch from '../../hooks/useFetch'
import Slider from '../../components/SliderServicios'

type DataProps = {
  data: null | Array<{ id: number; image: string }>
  loading: boolean
}
const ServiciosItem = ({ data }) => {
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${data.id}`) as DataProps

  return (
    <article className='h-full lg:flex'>
      <section className='w-full lg:w-2/5 lg:h-screen relative'>
        {!loadingImages && <Slider data={dataImages} />}
      </section>
      <section className='py-20 px-8 lg:pl-16 lg:pr-32 lg:w-3/5 xl:pt-16 2xl:pt-40'>
        <h1 className='text-5xl text-primary mb-4 lg:text-6xl'>
          <strong>SERVICIOS</strong>
        </h1>
        <p className='text-wrap'>
          Nuestro servicio de elaboración de proyectos, provisión e instalación abarca un amplio espectro de sistemas,
          entre otros:
        </p>
        <div className='text-primary flex justify-end my-4 lg:my-8'>
          <Bar />
        </div>

        <section className='flex flex-col gap-y-4 lg:gap-y-8'>
          <div>
            <img
              src={data.image}
              alt={data.title}
            />
          </div>
          <h2 className='text-3xl text-primary'>
            <strong>{data.title}</strong>
          </h2>
          <div>{data.text}</div>
        </section>
      </section>
    </article>
  )
}

export default ServiciosItem
