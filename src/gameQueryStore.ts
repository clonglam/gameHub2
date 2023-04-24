import { create } from 'zustand'

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  searchText?: string
}

interface GameQueryStore {
  gameQuery: GameQuery
  setSearchText: (searchText: string) => void
  setGenreId: (genreId: number) => void
  setplatformId: (platformId: number) => void
  setSortOrder: (order: string) => void
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setplatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: order } })),
}))

export default useGameQueryStore
