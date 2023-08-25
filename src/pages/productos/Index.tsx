import Layout from '../../layout/Layout'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Back, Forward } from '../../icons/icons'
import ProductosItem from './ProductosItem'
import { useEffect } from 'react'

const Index = () => {
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

  const properties = {
    prevArrow: (
      <button className='text-primary ml-8 hover:-translate-x-0.5 transition-all back-button'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='text-primary mr-8 hover:translate-x-0.5 transition-all forward-button'>
        <Forward />
      </button>
    ),
    autoplay: false,
    transitionDuration: 400,
    indicators: false,
    arrows: true
  }

  return (
    <Layout>
      <div className='text-primary'>
        <Slide {...properties}>
          <ProductosItem />
          <ProductosItem />
          <ProductosItem />
        </Slide>
      </div>
    </Layout>
  )
}

export default Index
