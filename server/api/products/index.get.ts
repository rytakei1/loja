import { prisma } from "~/prisma/db";

export default defineEventHandler(async () => {
  const products = await prisma.product.findMany();
  return products;
});
