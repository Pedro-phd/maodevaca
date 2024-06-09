import { FastifyInstance } from "fastify";
import newTransactionSchema from "../domain/transaction/schema";
import { TransactionService } from "../domain/transaction/transaction.service";

export async function TransactionController(server: FastifyInstance) {

  const transactionService = new TransactionService()

  server.get('/all', async (req, res) => {
    const response = await transactionService.findAll();

    if(response === null) {
      return res.code(204).send([])
    }

    return res.code(200).send(response)
  })

  server.get('/:id', async (req,res) => {
    interface Params {
      id: string
    }
    const { id } = req.params as Params
    const response = await transactionService.findById(id);

    if(response === null) {
      return res.code(404).send({
        message: `Not found transaction with id ${id}`
      })
    }

    return res.send(response[0])
  })

  server.post('/new', async (req, res) => {
    const body = req.body;
    const { success, error, data } = newTransactionSchema.safeParse(body)

    if(!success) {
      const errorResponse = error.errors.map(e => ({ field: e.path[0], message: e.message }))
      return res.code(400).send({
        messages: "There are fields with errors",
        fields: errorResponse
      })
    }

    const { data: insertData, error: insertError } = await transactionService.newTransaction(data)
    if(insertError) {
      return res.code(400).send(insertError)
    }

    return res.code(201).send(insertData)
  })
}