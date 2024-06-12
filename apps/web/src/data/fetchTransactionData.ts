/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  description: string
  type: string
  date: string
  tags_id: string
}

const fetchTransactionData = async ({
  description,
  date,
  type,
  tags_id,
}: Props) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const response = await fetch(
    API_URL +
      '/v1/transactions/all' +
      `?description=${description}&date=${date}&type=${type}&tags_id=${tags_id}`,
    {
      cache: 'no-store',
    },
  )
  const data = await response.json()
  return data
}
export default fetchTransactionData
