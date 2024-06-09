import 'dotenv/config'
import server from './server'
import { TransactionController } from './controller/transaction.controller'
import { TagController } from './controller/tag.controller'
import cors from '@fastify/cors'

server.register(cors)

server.register(TransactionController, {prefix:'/v1/transactions'})
server.register(TagController, {prefix:'/v1/tags'})



// START SERVER
server.listen({ port: 3001 }).then(() => console.log('Server is running'))

