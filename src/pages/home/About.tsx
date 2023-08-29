import TextHTML from '../../hooks/useHTML'
import useFetch from '../../hooks/useFetch'

type DataProps = {
  data: null | Array<{ id: number; text: string }>
  loading: boolean
}
const About = () => {
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos`) as DataProps

  return (
    <section
      className='py-12 lg:py-16 bg-white section'
      id='somosaustral'
    >
      <div className='flex flex-col gap-y-4 text-wrap m-auto max-w-4xl pr-8 strong-primary'>
        {!loadingTexts && <TextHTML text={dataTexts[1].text} />}
      </div>
    </section>
  )
}

export default About
