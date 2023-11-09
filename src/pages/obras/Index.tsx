import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { Bar } from '../../icons/icons'
import Obra from './Obra'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch('/obras')

  useEffect(() => {
    window.scrollTo(0, 0)
    const header = document.querySelector('header section')
    const menu = document.querySelector('.menu-mobile')
    header?.classList.remove('bg-primary')
    header?.classList.add('text-primary')
    menu?.classList.remove('bg-primary')
    menu?.classList.add('text-primary')
    menu?.classList.add('bg-white')
  }, [])

  return (
    <Layout>
      <section id='obras'>
        <div className='m-auto max-w-6xl px-8 pt-40 text-primary mb-12'>
          <h1 className='text-4xl lg:text-6xl mb-6 lg:mb-12'>
            <strong>
              Nuestras
              <br />
              Obras
            </strong>
          </h1>
          <Bar />
        </div>

        <section className='flex flex-col gap-y-12 [&>article:last-child]:border-0'>
          {loading ? (
            <Loader />
          ) : (
            data?.map(item => (
              <Obra
                key={item.id}
                data={item}
              />
            ))
          )}
        </section>
      </section>
    </Layout>
  )
}

export default Index
