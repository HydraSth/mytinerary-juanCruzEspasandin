import { RouterProvider, createHashRouter } from 'react-router-dom'
import './assets/normalize.css'
import './assets/tailwind.css'
import Home from './components/Home/Home.jsx'
import Cities from './components/Cities/Cities.jsx'

const router = createHashRouter([
  {
    path: '/cities',
    element: <Cities/>
  },
  {
    path: '/',
    element: <Home/>
  }
])
function App() {
  return (
    <div className=' flex flex-col min-h-screen place-content-between bg-secondary'>
        <RouterProvider router={router}>
          <Home/>
          <Cities></Cities>
        </RouterProvider>
    </div>
  )
}

export default App
