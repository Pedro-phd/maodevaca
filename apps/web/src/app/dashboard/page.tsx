'use client'

import { DollarSign, EqualNot, Wallet } from 'lucide-react'
import CardDashboard from './components/CardDashboard'
import TableDashboard from './components/TableDashboard'
import useTransactionData from '@/hooks/useTransaction'
import FilterBardDashboard from './components/FilterBarDashboard'
import useTotalAmount from '@/hooks/useTotalAmount'

function Dashboard() {
  const { query } = useTransactionData()
  const { data: totalAmount } = useTotalAmount()

  const difference =
    totalAmount?.totalInput ?? 0 - (totalAmount?.totalOutput ?? 0)

  const { isLoading } = query

  return (
    <div className="w-full bg-muted flex flex-col gap-8">
      <div className="flex justify-between gap-8">
        <CardDashboard
          title="Total input"
          value={totalAmount?.totalInput ?? 0}
          icon={<DollarSign size={16} />}
          desc="Total amount that entered your account."
          isLoading={isLoading}
        />
        <CardDashboard
          title="Total output"
          value={totalAmount?.totalOutput ?? 0}
          icon={<DollarSign size={16} />}
          desc="Total amount of withdrawals from your account"
          isLoading={isLoading}
        />
        <CardDashboard
          title="Difference"
          value={difference ?? 0}
          icon={<EqualNot size={16} />}
          desc="Diferrence between withdraw and deposit"
          isLoading={isLoading}
        />
        <CardDashboard
          title="Balance"
          value={-5000}
          icon={<Wallet size={16} />}
          desc="Current total in your balance"
          isLoading={isLoading}
        />
      </div>
      <FilterBardDashboard />
      <TableDashboard />
    </div>
  )
}

export default Dashboard
