import './App.css'

import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'

import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatform'
export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  order: string | null
  searchText: string
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{ base: `" nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <Flex mb={5}>
          <Box mr={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            onSelectedSortOrder={(order) =>
              setGameQuery({ ...gameQuery, order })
            }
            selectedSortOrder={gameQuery.order}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
