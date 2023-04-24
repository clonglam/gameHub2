import genres from '../data/genres'

export type Genre = {
  id: number
  name: string
  image_background: string
}

export type FetchGenresResponse = {
  count: number
  next?: string
  previous?: string
  results: Genre[]
}

// const useGenres = () => useData<Genre>('/genres')
const useGenres = () => ({ data: genres, isLoading: false, error: null })
export default useGenres
