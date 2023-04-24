import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'

import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  const {
    background_image,
    slug,
    name,
    parent_platforms,
    metacritic,
    rating_top,
  } = game
  return (
    <Card minHeight="350px">
      <Image
        src={getCroppedImageUrl(background_image)}
        alt={`${slug}_coverImage`}
      />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {name} <Emoji rating={rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
