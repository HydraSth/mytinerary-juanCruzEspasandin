import { RouterProvider, createHashRouter } from 'react-router-dom'
import './assets/normalize.css'
import './assets/tailwind.css'
import Cities from './Layouts/Cities'
import Home from './Layouts/Home'
import Details from './Layouts/Details'
import Login from './Layouts/Login'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import userActions from './redux/actions/user_actions'

const router = createHashRouter([
  {
    path: '/cities',
    element: <Cities/>
  },
  {
    path: '/cities/:cityName',
    element: <Details/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  }
])

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(userActions.authenticate())
  },[])
  return (
    <div className=' flex flex-col min-h-screen place-content-between bg-secondary'>
        <RouterProvider router={router}>
          <Home/>
          <Details/>
          <Cities/>
          <Login/>
        </RouterProvider>
    </div>
  )
}

export default App
