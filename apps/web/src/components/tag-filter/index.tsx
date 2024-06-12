import useTag from '@/hooks/useTag'
import { Badge } from '../ui/badge'
import useCustomSearchParams from '@/hooks/useCustomSearchParams'

interface Props {
  id: number
}

function TagFilter({ id }: Props) {
  const { details } = useTag()
  const { tagsToObject } = details

  const { setSearchParams } = useCustomSearchParams()

  return (
    <Badge
      variant="default"
      onClick={() => setSearchParams('tags_id', id.toString())}
      className="cursor-pointer"
    >
      {tagsToObject[id]}
    </Badge>
  )
}

export default TagFilter
