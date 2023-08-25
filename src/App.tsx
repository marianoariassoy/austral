import { Route } from 'wouter'
import Home from './pages/home/Index'
import Productos from './pages/productos/Index'

function App() {
  return (
    <>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/home'
        component={Home}
      />
      <Route
        path='/somosaustral'
        component={Home}
      />
      <Route
        path='/servicios'
        component={Home}
      />
      <Route
        path='/clientes'
        component={Home}
      />
      <Route
        path='/contacto'
        component={Home}
      />
      <Route
        path='/ventilacion'
        component={Productos}
      />
      <Route
        path='/aire-acondicionado'
        component={Productos}
      />
      <Route
        path='*'
        component={Home}
      />
    </>
  )
}

export default App
