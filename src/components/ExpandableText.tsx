import { Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

interface Props {
  children: string
  limit?: number
}
const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false)

  if (!children) return null

  if (children.length <= limit) return <Text>{children}</Text>

  const summary = children.substring(0, limit) + ' ...'

  return (
    <Text>
      {expanded ? children : summary}
      <Button
        onClick={() => setExpanded(!expanded)}
        size="xs"
        fontWeight="bold"
        ml={1}
        colorScheme="yellow"
      >
        {expanded ? 'show Less' : 'Read More'}
      </Button>
    </Text>
  )
}

export default ExpandableText
