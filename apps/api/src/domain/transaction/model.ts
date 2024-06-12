export interface Transaction {
  id?: number,
  amount: number,
  description: string,
  date?: string,
  tags_id?: string[],
  type: TransactionType
}

export type TransactionType = "INPUT" | "OUTPUT"

export interface TransactionFilters {
  date?: string
  description?: string
  tags_id?: string
  type?: string
}