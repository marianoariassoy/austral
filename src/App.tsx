import { Route, Switch } from 'wouter'
import Home from './pages/home/Index'
import Productos from './pages/productos/Index'

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
      <Route component={Home} />
    </Switch>
  )
}

export default App
