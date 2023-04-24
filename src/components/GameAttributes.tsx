import { SimpleGrid, Text } from '@chakra-ui/react'

import Game from '../entities/Game'
import CriticScore from './CriticScore'
import DefinitionItem from './DefinitionItem'

interface Props {
  game: Game
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 2 }}
      as="dl"
      spacing={6}
      padding={10}
    >
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => {
          const { id, name } = platform
          return <Text key={id}>{name}</Text>
        })}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  )
}

export default GameAttributes
