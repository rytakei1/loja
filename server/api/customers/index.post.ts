import { prisma } from "~/prisma/db";
import { createCustomerSchema } from "~/schemas/customer";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, (data) =>
    createCustomerSchema.safeParse(data)
  );
  if (!body.success) {
    throw createError({
      statusCode: 400,
      data: body.error.format(),
      message: "Validation Error",
    });
  }
  const res = await prisma.customer.create({ data: { name: body.data.name } });
  return res;
});
