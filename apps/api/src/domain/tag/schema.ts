import z from "zod";

export const tagSchema = z.object({
  name: z.string({ message: "Name is required" })
})