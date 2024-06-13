import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Box className=' h-screen flex flex-col gap-[10rem] pt-[8rem] items-center'>
        <Heading fontSize={"3rem"} fontStyle={"italic"}>E-Shop</Heading>
        <ButtonGroup gap={'2rem'}>
          <Link to={"/products"}><Button> See Products</Button></Link>
          <Link to={"/login"}><Button> Login</Button></Link>
        </ButtonGroup>
        
    </Box>
  )
}

export default HomePage