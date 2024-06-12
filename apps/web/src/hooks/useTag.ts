import fetchTagData from '@/data/fetchTagData'
import { Tag } from '@/domain/tag/models'
import { useQuery } from '@tanstack/react-query'

function useTag() {
  const query = useQuery<Tag[]>({
    queryKey: ['tag-data'],
    queryFn: fetchTagData,
  })

  const toObject = (array: Tag[]) => {
    if (array.length === 0) {
      return {}
    }
    const result = {} as Record<number, string>
    for (const obj of array) {
      const id = obj.id
      const name = obj.name
      result[id] = name
    }
    return result
  }

  return {
    query,
    details: {
      tagsToObject: toObject(query.data ?? []),
    },
  }
}

export default useTag
