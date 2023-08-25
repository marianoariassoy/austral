import { useEffect } from 'react'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import Home from './Home'
import Servicios from './Servicios'
import Clientes from './Clientes'
import Contacto from './Contacto'

const Index = () => {
  const [location] = useLocation()
  useEffect(() => {
    const target = location.replace('/', '#') as string
    const targetElement = document.querySelector(`${target}`) as HTMLElement
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    })
  }, [location])

  return (
    <Layout>
      <Home />
      <Servicios />
      <Clientes />
      <Contacto />
    </Layout>
  )
}

export default Index
