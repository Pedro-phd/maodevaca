import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface Props {
  title: string
  desc: string
  value: number
  icon: ReactNode
}

function CardDashboard({ title, value, icon, desc }: Props) {
  const colors = {
    positive: 'bg-emerald-500',
    negative: 'bg-red-500',
    neutral: 'bg-yellow-500',
  }

  const balanceResume =
    value > 0 ? 'positive' : value === 0 ? 'neutral' : 'negative'

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold flex gap-2 items-center">
          {value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
          <div className={cn('size-3 rounded-sm', colors[balanceResume])} />
        </div>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  )
}

export default CardDashboard
