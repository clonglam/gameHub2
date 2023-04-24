import { Box, HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between" spacing={5}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Box width="88%">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
