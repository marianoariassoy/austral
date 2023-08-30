import { Bar } from '../../icons/icons'
import Slider from '../../components/SliderServicios'
import useFetch from '../../hooks/useFetch'

type DataProps = {
  data: null | Array<{ id: number; image: string }>
  loading: boolean
}

const ProductosItem = ({ data }) => {
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${data.id}`) as DataProps

  return (
    <article className='h-full lg:flex '>
      <section className='w-full aspect-square lg:aspect-auto lg:w-2/5 lg:h-screen relative'>
        {!loadingImages && <Slider data={dataImages} />}
      </section>

      <section className='pt-20 px-8 lg:pl-20 lg:pr-32 xl:pt-36 2xl:pt-48 lg:w-3/5'>
        <h1 className='text-xl text-primary lg:mb-4'>
          <strong>Productos</strong>
        </h1>
        <h1 className='text-5xl lg:text-6xl text-primary'>
          <strong>{data.section}</strong>
        </h1>
        <div className='text-secondary flex justify-end my-4 lg:my-8'>
          <Bar />
        </div>
        <section className='flex flex-col  max-w-3xl text-xl gap-y-2 lg:gap-y-4 lg:text-3xl'>
          <h2 className='text-primary'>
            <strong>{data.title}</strong>
          </h2>
          <h3 className='text-secondary'>
            <strong>Características</strong>
          </h3>
          <p className='text-wrap text-base whitespace-pre-wrap'>{data.text}</p>
        </section>
      </section>
    </article>
  )
}

export default ProductosItem
