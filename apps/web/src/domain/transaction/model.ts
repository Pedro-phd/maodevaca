export type TransactionType = 'INPUT' | 'OUTPUT'

export interface Transaction {
  id?: number
  amount: number
  description: string
  date?: string
  tags_id?: string[]
  type: TransactionType
}
