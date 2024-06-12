export type TransactionType = 'INPUT' | 'OUTPUT'

export interface Transaction {
  id?: number
  amount: number
  description: string
  date: Date
  tags_id?: number[]
  type: TransactionType
}

export interface TotalAmount {
  totalInput: number
  totalOutput: number
}
