import Layout from '../../layout/Layout'
import Home from './Home'
import Servicios from './Servicios'
import Clientes from './Clientes'
import Contacto from './Contacto'
const Index = () => {
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
