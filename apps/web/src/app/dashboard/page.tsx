import { DollarSign, EqualNot, Wallet } from 'lucide-react'
import CardDashboard from './components/CardDashboard'
import TableDashboard from './components/TableDashboard'

async function Dashboard() {
  return (
    <div className="w-full bg-muted flex flex-col gap-8">
      <div className="flex justify-between gap-8">
        <CardDashboard
          title="Total input"
          value={10000}
          icon={<DollarSign size={16} />}
          desc="Total amount that entered your account."
        />
        <CardDashboard
          title="Total output"
          value={0}
          icon={<DollarSign size={16} />}
          desc="Total amount of withdrawals from your account"
        />
        <CardDashboard
          title="Difference"
          value={-5000}
          icon={<EqualNot size={16} />}
          desc="Diferrence between withdraw and deposit"
        />
        <CardDashboard
          title="Balance"
          value={-5000}
          icon={<Wallet size={16} />}
          desc="Current total in your balance"
        />
      </div>
      <TableDashboard />
    </div>
  )
}

export default Dashboard
