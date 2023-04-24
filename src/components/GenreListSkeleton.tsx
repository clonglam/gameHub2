import { List, ListItem, Skeleton } from '@chakra-ui/react'

const GenreListSkeleton = () => {
  return (
    <List paddingY={1}>
      {[...Array(30)].map((item, index) => (
        <ListItem key={'genre' + index} paddingY={1}>
          <Skeleton height="40px" width="100%" />
        </ListItem>
      ))}
    </List>
  )
}

export default GenreListSkeleton
