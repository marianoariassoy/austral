import 'react-slideshow-image/dist/styles.css'
import Slider from '../../components/SliderObras'
import useFetch from '../../hooks/useFetch'

const Obra = ({ data }) => {
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${data.id}`)

  return (
    <article className='border-b border-primary pb-12'>
      <div className='m-auto max-w-6xl px-8 text-primary mb-6 lg:mb-12'>
        <h1 className='text-3xl lg:text-5xl'>{data.title}</h1>
      </div>

      <section className='relative'>{!loadingImages && <Slider data={dataImages} />}</section>

      <div className='m-auto max-w-6xl px-8 text-primary mt-6 lg:mt-12 lg:text-xl'>
        <p>
          <strong>Obra: </strong>
          {data.work}
        </p>
        <p>
          <strong>Ubicacion: </strong>
          {data.location}
        </p>
        <p>
          <strong>Cliente: </strong>
          {data.client}
        </p>
        <p className='text-gray-400'>
          <strong>Potencia: </strong>
          {data.power}
        </p>
      </div>
    </article>
  )
}

export default Obra
