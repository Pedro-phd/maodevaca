import { format } from 'date-fns'

const formatDate = (date: Date) => {
  return format(date, 'dd/MM/yyyy - HH:mm')
}

export default formatDate
