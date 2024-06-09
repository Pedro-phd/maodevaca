'use client'

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table'
import fetchTransactionData from '../fetchTransactionData'
import { useQuery } from '@tanstack/react-query'
import { Transaction } from '@/domain/transaction/model'

function TableDashboard() {
  const { data } = useQuery<Transaction[]>({
    queryKey: ['transaction-data'],
    queryFn: fetchTransactionData,
  })

  console.log(data)

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((t) => {
            return (
              <TableRow key={t.id}>
                <TableCell className="font-medium">
                  {t.amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableCell>
                <TableCell>{t.description}</TableCell>
                <TableCell>{t.date?.normalize('NFC')}</TableCell>
                <TableCell>tag</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableDashboard
