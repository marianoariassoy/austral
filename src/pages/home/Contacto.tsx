import Form from '../../components/Form'
import { Bar } from '../../icons/icons'

const Contact = () => {
  return (
    <section
      className='section'
      id='contacto'
    >
      <div className='px-8 py-20 lg:py-28 m-auto max-w-3xl text-primary'>
        <h1 className='text-5xl lg:text-6xl mb-8'>
          <strong>CONTACTO</strong>
        </h1>

        <Form />

        <div className='mt-8'>
          <span className='block'>
            <strong>Tel.</strong> +54 387 2437743
          </span>
          <span className='block'>
            <strong>Cel.</strong>{' '}
            <a
              href='https://wa.me/5493875040576'
              target='_blank'
              rel='noreferrer'
              className='hover:underline'
            >
              +54 9 387 504-0576
            </a>
          </span>
          <span className='block'>
            <strong>Dir.</strong> O’higgins N° 1340
          </span>
          <span className='block'>Salta - Argentina</span>
        </div>

        <div className='text-primary mt-4'>
          <Bar />
        </div>
      </div>
    </section>
  )
}

export default Contact
