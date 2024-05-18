import { prisma } from "~/prisma/db";

export default defineEventHandler(async () => {
  const categories = await prisma.category.findMany();
  return categories;
});
