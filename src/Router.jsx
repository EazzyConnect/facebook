import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import Layout from '../mainLayout/Layout';
import Login from './components/Login';


const Router = createBrowserRouter([
 {
  path: "/",
  element: <Layout />,
  children: [
   {
    index: true,
    element: <Login />
   },
   {
    path: "/home",
    element: <Home />
   },
   {
    path: "/about",
    element: <About />
   },
   {
    path: "/contact",
    element: <Contact />
   },
   {
    path: "/settings",
    element: <Settings />
   },
  ]
 }
])

export default Router