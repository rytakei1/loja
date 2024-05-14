import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string({ required_error: "Nome é obrigatório" })
    .min(1, "Nome é obrigatório"),
  imageUrl: z.string().optional(),
  price: z
    .bigint({ required_error: "Preço é obrigatório" })
    .min(BigInt(0), "Preço deve ser maior que zero"),
  stock: z
    .number({ required_error: "Estoque é obrigatório" })
    .min(0, "Estoque precisa ser no mínimo zero"),
  description: z.string().optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  categoryId: z.number().optional(),
});
