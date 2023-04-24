import Genre from './Genre'
import Platform from './Platform'
import Publisher from './Publisher'

interface Game {
  id: number
  name: string
  slug: string
  rating_top: number
  background_image: string
  description_raw: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
  genres: Genre[]
  publishers: Publisher[]
}

export default Game
