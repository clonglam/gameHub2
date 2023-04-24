import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

import { SortOrder } from '../hooks/useGames'

interface Props {
  onSelectedSortOrder: (order: string) => void
  selectedSortOrder: string | null
}

const SortSelector = ({ selectedSortOrder, onSelectedSortOrder }: Props) => {
  const sortOrders = [
    {
      value: '',
      label: 'Relevance',
    },
    {
      value: '-added',
      label: 'Date Added',
    },
    {
      value: '-released',
      label: 'Released Date',
    },
    {
      value: '-metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average rating',
    },
  ]

  const currentSortOrder = sortOrders.find(
    (order) => selectedSortOrder === order.value
  )
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.value || sortOrders[0].value}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => {
          const { value, label } = order
          return (
            <MenuItem
              key={value}
              onClick={() => onSelectedSortOrder(order.value)}
            >
              {label}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
