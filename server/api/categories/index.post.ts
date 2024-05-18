import { prisma } from "~/prisma/db";
import { handlePrismaError } from "~/prisma/utils/errorHandling";
import { createCategorySchema } from "~/schemas/category";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, (data) =>
    createCategorySchema.safeParse(data)
  );
  if (!body.success) {
    throw createError({
      statusCode: 400,
      data: body.error.format(),
      message: "Validation Error",
    });
  }
  try {
    const res = await prisma.category.create({
      data: body.data,
    });
    return res;
  } catch (err) {
    handlePrismaError(err);
  }
});
