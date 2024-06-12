'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import useCustomSearchParams from '@/hooks/useCustomSearchParams'
import { DatePicker } from '@/components/date-picker'
import { format, isValid } from 'date-fns'

function FilterBardDashboard() {
  const { setSearchParams, clear } = useCustomSearchParams()

  const [filter, setFilter] = useState({
    type: 'all',
    date: new Date(),
    tags: [],
    description: '',
  })

  const changeFilter = (field: string, value: string | Date) => {
    setFilter((old) => ({ ...old, [field]: value }))
    if (isValid(value)) {
      value = format(value, 'yyyy-MM-dd')
    }
    setSearchParams(field, value.toString())
  }

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Label>Filter</Label>
        <Separator orientation="vertical" />
        <Select
          onValueChange={(e) => changeFilter('type', e)}
          value={filter.type}
        >
          <SelectTrigger className="w-[180px]">
            Type: {filter.type}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="input">Input</SelectItem>
            <SelectItem value="output">Output</SelectItem>
            <SelectItem value=" ">All</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Search by description"
          value={filter.description}
          onChange={(e) => changeFilter('description', e.target.value)}
        />
        <DatePicker
          date={filter.date}
          setDate={(d) => changeFilter('date', d!)}
        />
        <Separator orientation="vertical" />
        <Button variant="outline" onClick={clear}>
          Clear filter
        </Button>
      </div>

      <Button variant="outline">New transaction</Button>
    </div>
  )
}

export default FilterBardDashboard
