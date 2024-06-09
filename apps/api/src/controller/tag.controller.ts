import { FastifyInstance } from "fastify";
import { TagService } from "../domain/tag/tag.service";
import { tagSchema } from "../domain/tag/schema";
import z from "zod";


export async function TagController(server: FastifyInstance) {

  const tagService = new TagService()

  server.get('/all', async (req, res) => {
    const data = await tagService.findAll()
    if(data?.length === 0) {
      res.code(204).send([])
    }

    return res.code(200).send(data)
  })

  server.post('/new', async (req, res) => {
    const body = req.body;
    const { success, data, error } = tagSchema.safeParse(body)

    if(!success) {
      const errorResponse = error.errors.map(e => ({ field: e.path[0], message: e.message }))
      return res.code(400).send({
        messages: "There are fields with errors",
        fields: errorResponse
      })
    }

    const { data: insertData, error: insertError } = await tagService.newTag(data)

    if(insertError) {
      return res.code(400).send(insertError)
    }

    return res.code(201).send(insertData)
  })

  server.put('/edit/:id', async (req, res) => {

    interface Params {
      id: number
    }
    type Body = z.infer<typeof tagSchema>;

    const body = req.body as Body;
    const { id } = req.params as Params
    const { success, error } = tagSchema.safeParse(body)

    if(!success) {
      const errorResponse = error.errors.map(e => ({ field: e.path[0], message: e.message }))
      return res.code(400).send({
        messages: "There are fields with errors",
        fields: errorResponse
      })
    }
    const data = await tagService.changeTag({ name: body.name, id })
    return res.code(201).send(data)
  })


}