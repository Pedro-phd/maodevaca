/* eslint-disable camelcase */
'use client'

import fetchTransactionData from '@/data/fetchTransactionData'
import { Transaction } from '@/domain/transaction/model'
import { useQuery } from '@tanstack/react-query'
import useCustomSearchParams from './useCustomSearchParams'

function useTransactionData() {
  const { searchParams } = useCustomSearchParams()
  const date = searchParams.get('date') ?? ''
  const type = searchParams.get('type') ?? ''
  const description = searchParams.get('description') ?? ''
  const tags_id = searchParams.get('tags_id') ?? ''

  const query = useQuery<Transaction[]>({
    queryKey: ['transaction-data', description, date, type],
    queryFn: () => fetchTransactionData({ description, date, type, tags_id }),
  })

  if (query.data === undefined) {
    return { query }
  }

  const totalInput = query.data
    ?.filter((t) => t.type === 'INPUT')
    .reduce((acc, currente) => {
      return acc + currente.amount
    }, 0)

  const totalOutput = query.data
    ?.filter((t) => t.type === 'OUTPUT')
    .reduce((acc, currente) => {
      return acc + currente.amount
    }, 0)

  const difference = totalInput - totalOutput

  return {
    query,
    details: {
      totalInput,
      totalOutput,
      difference,
    },
  }
}

export default useTransactionData
