import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

import usePlatforms, { Platform } from '../hooks/usePlatform'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms()
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => {
          const { id, name } = platform
          return (
            <MenuItem key={id} onClick={() => onSelectPlatform(platform)}>
              {name}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
