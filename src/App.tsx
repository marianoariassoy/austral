import { Route } from 'wouter'
import Index from './pages/home/Index'

function App() {
  return (
    <>
      <Route
        path='/'
        component={Index}
      />
    </>
  )
}

export default App
