import { useQuery } from '@tanstack/react-query'

import GameImage from '../entities/GameImage'
import APIClient from '../services/api-client'
import { FetchResponse } from './../services/api-client'

const useGameImages = (gameId: number) => {
  const apiClient = new APIClient<GameImage>(`games/${gameId}/screenshots`)

  return useQuery({
    queryKey: ['games', gameId, 'screenshots'],
    queryFn: apiClient.getAll,
  })
}

export default useGameImages
