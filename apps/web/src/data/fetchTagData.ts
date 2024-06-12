const fetchTagData = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const response = await fetch(API_URL + '/v1/tags/all', {
    cache: 'no-store',
  })
  const data = await response.json()
  return data
}
export default fetchTagData
