import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import router from "../clientrouter/router.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router}/> 
  
)
