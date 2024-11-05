import React from 'react';
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Vehicle from './components/Vehicle';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  },
  {
    path: '/vehicle',
    element: <>
      <Navbar/>
      <Vehicle/>
      <Footer/>
    </>
  },
  {
    path: '/contact',
    element: <>
      <Navbar/>
      <Contact/>
      <Footer/>
    </>
  },
  {
    path: '/login',
    element: <>
      <Navbar/>
      <Login/>
      <Footer/>
    </>
  },
  {
    path: '/signup',
    element: <>
      <Navbar/>
      <Signup/>
      <Footer/>
    </>
  },
  {
    path: '*',
    element: <>
      <Navbar/>
      <NotFound/>
      <Footer/>
    </>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App