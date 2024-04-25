import { prisma } from "~/prisma/db";

export default defineEventHandler(async (event) => {
  const customers = await prisma.customer.findMany();
  return customers;
});
