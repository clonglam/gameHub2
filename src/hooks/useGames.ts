import { GameQuery } from '../App'
import useData from './useData'
import { Genre } from './useGenres'
import { Platform } from './usePlatform'

export type Game = {
  id: number
  name: string
  slug: string
  rating_top: number
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
  genres: Genre[]
}

export type SortOrder = {
  value: string
  label: string
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.order,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  )

export default useGames
