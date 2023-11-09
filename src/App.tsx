import { Route, Switch } from 'wouter'
import Home from './pages/home/Index'
import Productos from './pages/productos/Index'
import Obras from './pages/obras/Index'

function App() {
  return (
    <Switch>
      <Route
        path='/ventilacion'
        component={Productos}
      />
      <Route
        path='/aire-acondicionado'
        component={Productos}
      />
      <Route
        path='/obras'
        component={Obras}
      />
      <Route component={Home} />
    </Switch>
  )
}

export default App
