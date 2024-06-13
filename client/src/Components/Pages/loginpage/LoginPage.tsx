import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Box>
        <Link to={"/"}>
        <Button>
            Go Back
        </Button>
        </Link>

    </Box>
  )
}

export default LoginPage