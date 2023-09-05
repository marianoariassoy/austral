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
