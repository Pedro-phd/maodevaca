import z from "zod";
import { TransactionType } from './model'

const newTransactionSchema = z.object({
  amount: z
    .number({ required_error: "Amount is required", invalid_type_error: "Amount is of type number" })
    .positive({ message: "Amount accept only positive numbers"}),
  description: z.string({ required_error: "Description is required" }),
  type: z.enum(["INPUT", "OUTPUT"], { message: "Type is only INPUT or OUTPUT" }),
  tags_id: z.string().array().optional(),
  date: z.string().datetime({ offset: true }).optional()
})

export default newTransactionSchema