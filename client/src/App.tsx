import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { Box, Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react'

function App() {
  const [output, setOutput] = useState("")
  useEffect(() => {
    axios.get("http://localhost:3002")
      .then(res => {
        console.log(res)
        setOutput(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
  )
}

export default App
