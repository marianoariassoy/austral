import { Bar } from '../../icons/icons'
import Slider from '../../components/SliderServicios'
import useFetch from '../../hooks/useFetch'

type DataProps = {
  data: null | Array<{ id: number; image: string }>
  loading: boolean
}

const ProductosItem = () => {
  const { data, loading } = useFetch(`/home`) as DataProps

  return (
    <article className='h-full lg:flex'>
      <section className='w-full aspect-square lg:aspect-auto lg:w-2/5 lg:h-screen relative'>
        {!loading && <Slider data={data} />}
      </section>

      <section className='py-20 px-8 lg:pl-20 lg:pr-32 lg:pt-36 lg:w-3/5'>
        <h1 className='text-xl text-primary lg:mb-8'>
          <strong>Productos</strong>
        </h1>
        <h1 className='text-5xl lg:text-7xl text-primary mb-4'>
          <strong>Aire Acondiconado</strong>
        </h1>
        <div className='text-secondary flex justify-end my-4 lg:mb-16 lg:mt-8'>
          <Bar />
        </div>
        <section className='flex flex-col  max-w-3xl text-xl gap-y-2 lg:gap-y-4 lg:text-3xl'>
          <h2 className='text-primary'>
            <strong>Cortina de aire frio calor</strong>
          </h2>
          <h3 className='text-secondary'>
            <strong>Características</strong>
          </h3>
          <p className='text-wrap text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde modi est assumenda culpa, autem, quisquam
            quidem a suscipit minus, tempore perspiciatis exercitationem possimus doloremque dicta earum aut blanditiis
            eius.
          </p>
        </section>
      </section>
    </article>
  )
}

export default ProductosItem
