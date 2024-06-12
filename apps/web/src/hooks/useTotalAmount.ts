import fetchTotalAmount from '@/data/fetchTotalAmount'
import { TotalAmount } from '@/domain/transaction/model'
import { useQuery } from '@tanstack/react-query'

function useTotalAmount() {
  const query = useQuery<TotalAmount>({
    queryKey: ['total-amount-data'],
    queryFn: fetchTotalAmount,
  })

  return query
}

export default useTotalAmount
