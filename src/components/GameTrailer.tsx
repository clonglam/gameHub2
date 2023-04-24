import { Spinner } from '@chakra-ui/react'
import React from 'react'

import useTrailers from '../hooks/useTrailers'

interface Props {
  gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId)

  if (isLoading) return <Spinner />

  if (error) throw error

  const firstTrailer = trailers?.results[0]
  return firstTrailer ? (
    <video src={firstTrailer.data[480]} poster={firstTrailer.preview} controls>
      <track kind="captions" label="Game Trailer" />
    </video>
  ) : null
}

export default GameTrailer
