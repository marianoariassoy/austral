import { Bar } from '../../icons/icons'
import TextHTML from '../../hooks/useHTML'
import useFetch from '../../hooks/useFetch'

type DataProps = {
  data: null | Array<{ id: number; text: string }>
  loading: boolean
}

const Clientes = () => {
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos`) as DataProps

  return (
    <section
      className='bg-primary text-white section'
      id='clientes'
    >
      <div className='m-auto max-w-6xl grid lg:grid-cols-2 items-center gap-12 px-8 py-20 lg:py-48'>
        <div>
          <h1 className='text-5xl lg:text-6xl mb-12'>
            <strong>NUESTROS PROYECTOS</strong>
          </h1>
          <div>
            <Bar />
          </div>
        </div>
        <div>{!loadingTexts && <TextHTML text={dataTexts[2].text} />}</div>
      </div>
    </section>
  )
}

export default Clientes
