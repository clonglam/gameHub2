import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import platforms from '../data/platforms'
import Platform from '../entities/Platform'
import APIClient from '../services/api-client'

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    initialData: platforms,
    staleTime: ms('24h'),
  })
}

export default usePlatforms
