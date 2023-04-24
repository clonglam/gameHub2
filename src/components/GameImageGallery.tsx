import { Image, SimpleGrid, Spinner } from '@chakra-ui/react'
import React from 'react'

import useGameImages from '../hooks/useGameImages'

interface Props {
  gameId: number
}

const GameImageGallery = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameImages(gameId)

  if (isLoading) return <Spinner />
  if (error) throw error

  console.log('gallery', data)

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map(({ id, image }) => (
        <Image key={id} src={image} />
      ))}
    </SimpleGrid>
  )
}

export default GameImageGallery
