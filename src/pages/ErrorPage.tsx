import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import NavBar from '../components/NavBar'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div>
      <NavBar />
      <Box padding={3}>
        <Heading>Ops There Error.</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This Page does not exist.'
            : 'An unexpected error occurre.'}
        </Text>
      </Box>
    </div>
  )
}

export default ErrorPage
