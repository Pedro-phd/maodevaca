'use client'

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import formatDate from '@/lib/formatDate'
import useTransactionData from '@/hooks/useTransaction'
import TagFilter from '@/components/tag-filter'

function TableDashboard() {
  const { query } = useTransactionData()
  const { data, isLoading } = query

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
          {isLoading &&
            Array.from({ length: 5 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    <Skeleton className="w-[100px] h-[20px] rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-[100px] h-[20px] rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-[100px] h-[20px] rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-[100px] h-[20px] rounded-sm" />
                  </TableCell>
                </TableRow>
              )
            })}
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
                <TableCell>{formatDate(t.date)}</TableCell>
                <TableCell className="flex gap-2">
                  {t.tags_id?.length === 0 && '-'}
                  {t.tags_id?.map((t) => <TagFilter id={t} />)}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableDashboard
