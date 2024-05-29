import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { SuccessPayment } from './pages/success/Success'
import { FailPayment } from './pages/failure/Failure'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/payment-success',
    element: <SuccessPayment/>
  },
  {
    path: '/payment-failure',
    element: <FailPayment/>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
