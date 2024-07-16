import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import CreateData, { loader as booksLoader } from './pages/CreateData';
import './App.css'


//create router & router paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Welcome /> 
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: booksLoader
      },
      {
        path: 'new',
        element: <CreateData />,
        loader: booksLoader
      }
    ]
  }
]);

const App = () => {

  return (
    <RouterProvider router={router}/>
  )
}

export default App